import { OperandImm, OperandMem, OperandPtr, OperandReg } from "./common.js";
import {
	BranchType,
	BroadcastMode,
	ConversionMode,
	DecoderMode,
	ElementType,
	ExceptionClass,
	ISAExt,
	ISASet,
	InsnCategory,
	InstructionEncoding,
	MachineMode,
	MaskMode,
	MemoryOperandType,
	Mnemonic,
	OpcodeMap,
	OperandAction,
	OperandEncoding,
	OperandType,
	OperandVisibility,
	Register,
	RoundingMode,
	StackWidth,
	SwizzleMode,
} from "./enums.js";
import zydis from "./native.js";
import { Resource, ZyjsField, withStack } from "./util.js";

const OpField = ZyjsField("DecOp");
export class DecodedOperand {
	resource: Resource;
	constructor(rsrc: Resource) {
		this.resource = rsrc;
	}

	@OpField
	id!: number;
	@OpField
	visiblity!: OperandVisibility;
	@OpField
	actions!: OperandAction;
	@OpField
	encoding!: OperandEncoding;
	@OpField
	size!: number;
	@OpField
	elementType!: ElementType;
	@OpField
	elementSize!: number;
	@OpField
	elementCount!: number;
	@OpField
	attributes!: number;
	@OpField
	type!: OperandType;

	@OpField
	protected immSigned!: number;
	@OpField
	protected immRelative!: number;
	@OpField
	protected imms!: bigint;
	@OpField
	protected immu!: bigint;
	@OpField
	protected ptrSeg!: number;
	@OpField
	protected ptrOff!: number;
	@OpField
	protected regv!: Register;
	@OpField
	protected memType!: MemoryOperandType;
	@OpField
	protected memSeg!: Register;
	@OpField
	protected memBase!: Register;
	@OpField
	protected memIndex!: Register;
	@OpField
	protected memScale!: Register;
	@OpField
	protected memHasDisp!: number;
	@OpField
	protected memDisp!: bigint;

	get imm(): OperandImm {
		if (this.type !== OperandType.IMMEDIATE) {
			throw TypeError("Operand type mismatch.");
		}

		if (this.immSigned) {
			return {
				s: this.imms,
				rel: !!this.immRelative,
			};
		} else {
			return {
				u: this.immu,
				rel: !!this.immRelative,
			};
		}
	}
	get reg(): OperandReg {
		if (this.type !== OperandType.REGISTER) {
			throw TypeError("Operand type mismatch.");
		}
		return {
			name: this.regv,
			is4: this.encoding === OperandEncoding.IS4,
		};
	}
	get ptr(): OperandPtr {
		if (this.type !== OperandType.POINTER) {
			throw TypeError("Operand type mismatch.");
		}
		return {
			segv: this.ptrSeg,
			off: this.ptrOff,
		};
	}
	get mem(): OperandMem {
		if (this.type !== OperandType.MEMORY) {
			throw TypeError("Operand type mismatch.");
		}
		const res: OperandMem = {
			type: this.memType,
			seg: this.memSeg,
			index: this.memIndex,
			base: this.memBase,
			scale: this.memScale,
			disp: this.memHasDisp ? this.memDisp : undefined,
		};
		if (res.seg === Register.NONE) {
			delete res.seg;
		}
		if (res.base === Register.NONE) {
			delete res.base;
		}
		if (res.scale === 0 || res.index === Register.NONE) {
			delete res.index;
			delete res.scale;
		}
		return res;
	}

	get() {
		switch (this.type) {
			case OperandType.IMMEDIATE:
				return this.imm;
			case OperandType.REGISTER:
				return this.reg;
			case OperandType.POINTER:
				return this.ptr;
			case OperandType.MEMORY:
				return this.mem;
			default:
				throw Error();
		}
	}
}

const FlagField = ZyjsField("FlagSet");

interface AccessedFlags {
	readonly tested: number;
	readonly modified: number;
	readonly set: number;
	readonly unset: number;
	readonly undef: number;
}
const flagsNoop: AccessedFlags = {
	tested: 0,
	modified: 0,
	set: 0,
	unset: 0,
	undef: 0,
};

class AccessedFlagsByPtr implements AccessedFlags {
	resource: { ref(): number };
	constructor(ptr: number) {
		this.resource = {
			ref() {
				return ptr;
			},
		};
	}

	@FlagField
	readonly tested!: number;
	@FlagField
	readonly modified!: number;
	@FlagField
	readonly set!: number;
	@FlagField
	readonly unset!: number;
	@FlagField
	readonly undef!: number;
}

const InsnField = ZyjsField("DecInsn");
export class DecodedInsn {
	resource: Resource;
	constructor(rsrc: Resource) {
		this.resource = rsrc;
	}

	// Common information.
	//
	@InsnField
	length!: number;
	@InsnField
	mnemonic!: Mnemonic;
	@InsnField
	encoding!: InstructionEncoding;
	@InsnField
	opcodeMap!: OpcodeMap;
	@InsnField
	opcode!: number;
	@InsnField
	stackWidth!: number;
	@InsnField
	operandWidth!: number;
	@InsnField
	addressWidth!: number;
	@InsnField
	operandCount!: number;
	@InsnField
	visibleOperandCount!: number;
	@InsnField
	attributes!: bigint;

	// AVX.
	//
	@InsnField
	vectorLength!: number;
	@InsnField
	maskMode!: MaskMode;
	@InsnField
	maskReg!: Register;
	@InsnField
	isBroadcastStatic!: 1 | 0;
	@InsnField
	broadcastMode!: BroadcastMode;
	@InsnField
	roundingMode!: RoundingMode;
	@InsnField
	swizzleMode!: SwizzleMode;
	@InsnField
	conversionMode!: ConversionMode;
	@InsnField
	hasSAE!: 1 | 0;
	@InsnField
	hasEvictionHint!: 1 | 0;

	// Meta.
	//
	@InsnField
	category!: InsnCategory;
	@InsnField
	isaSet!: ISASet;
	@InsnField
	isaExt!: ISAExt;
	@InsnField
	branchType!: BranchType;
	@InsnField
	exceptionClass!: ExceptionClass;

	// Flags.
	//
	@InsnField
	private cpuFlagsPtr!: number;
	@InsnField
	private fpuFlagsPtr!: number;

	get cpuFlags(): AccessedFlags {
		const ptr = this.cpuFlagsPtr;
		return ptr ? new AccessedFlagsByPtr(ptr) : flagsNoop;
	}
	get fpuFlags(): AccessedFlags {
		const ptr = this.fpuFlagsPtr;
		return ptr ? new AccessedFlagsByPtr(ptr) : flagsNoop;
	}

	operand(n: number): DecodedOperand {
		const ptr = zydis.asm.zyjsDecInsnRefOperand(this.resource.ref(), n);
		if (!ptr) {
			throw RangeError("Operand out of boundaries.");
		}
		return new DecodedOperand(this.resource.subresource(ptr));
	}
}

export class Decoder {
	resource: Resource;

	constructor(mode: MachineMode, width: StackWidth) {
		this.resource = new Resource(zydis.asm.zyjsNewDecoder(mode, width));
	}
	set(mode: DecoderMode, value: boolean) {
		zydis.asm.zyjsDecoderSetMode(this.resource.ref(), mode, value ? 1 : 0);
		return this;
	}
	decode(buffer: Uint8Array) {
		const ptr = withStack((a) => {
			return zydis.asm.zyjsDecoderDecode(this.resource.ref(), a.buf(buffer), buffer.length);
		});
		return new DecodedInsn(new Resource(ptr));
	}
}
