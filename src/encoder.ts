import { DecodedInsn } from "./decoder.js";
import { Resource, ZyjsField, withHeap, withStack } from "./util.js";
import zydis from "./native.js";
import {
	AddressSizeHint,
	BranchType,
	BranchWidth,
	BroadcastMode,
	ConversionMode,
	EncodableEncoding,
	InsnAttribute,
	MAX_INSN_LENGTH,
	MachineMode,
	Mnemonic,
	OperandSizeHint,
	OperandType,
	Register,
	RoundingMode,
	SwizzleMode,
} from "./enums.js";
import { OperandImm, OperandMem, OperandPtr, OperandReg } from "./common.js";

const OpField = ZyjsField("EncOp");

type OperandLike = keyof typeof Register | number | bigint | OperandImm | OperandReg | OperandPtr | OperandMem;
export class EncoderOperand {
	resource: Resource;
	constructor(rsrc: Resource) {
		this.resource = rsrc;
	}

	@OpField
	type!: OperandType;

	@OpField
	imms!: bigint;
	@OpField
	immu!: bigint;
	@OpField
	ptrSeg!: number;
	@OpField
	ptrOff!: number;
	@OpField
	regv!: Register;
	@OpField
	regIs4!: 1 | 0;
	@OpField
	memBase!: Register;
	@OpField
	memIndex!: Register;
	@OpField
	memScale!: Register;
	@OpField
	memDisp!: bigint;

	get imm(): OperandImm {
		if (this.type !== OperandType.IMMEDIATE) {
			throw TypeError("Operand type mismatch.");
		}
		return {
			s: this.imms,
			u: this.immu,
		};
	}
	set imm(o: OperandImm | bigint | number) {
		this.type = OperandType.IMMEDIATE;

		if (typeof o === "object") {
			if ("s" in o) {
				this.imms = o.s;
			} else {
				this.immu = o.u;
			}
		} else {
			this.imms = BigInt(o);
		}
	}

	get reg(): OperandReg {
		if (this.type !== OperandType.REGISTER) {
			throw TypeError("Operand type mismatch.");
		}
		return {
			name: this.regv,
			is4: !!this.regIs4,
		};
	}
	set reg(o: OperandReg | Register | keyof typeof Register) {
		this.type = OperandType.REGISTER;
		if (typeof o === "string") {
			this.regv = Register[o];
		} else if (typeof o === "number") {
			this.regv = o;
		} else {
			this.regv = o.name;
			this.regIs4 = o.is4 || false ? 1 : 0;
		}
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
	set ptr(o: OperandPtr) {
		this.type = OperandType.POINTER;
		this.ptrOff = o.off;
		this.ptrSeg = o.segv;
	}

	get mem(): OperandMem {
		const res: OperandMem = {
			index: this.memIndex,
			base: this.memBase,
			scale: this.memScale,
			disp: this.memDisp,
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
	set mem(o: OperandMem) {
		this.type = OperandType.MEMORY;
		this.memBase = o.base ?? Register.NONE;
		this.memDisp = o.disp ?? 0n;
		this.memIndex = o.index ?? Register.NONE;
		this.memScale = o.scale ?? 0;
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
	set(o: OperandLike) {
		if (typeof o === "number" || typeof o === "bigint") {
			return void (this.imm = o);
		} else if (typeof o === "string") {
			return void (this.reg = o);
		}

		// OperandImm
		if ("s" in o || "u" in o) {
			this.imm = o;
		}
		// OperandReg.
		//
		else if ("name" in o) {
			this.reg = o;
		}
		// OperandPtr.
		//
		else if ("off" in o) {
			this.ptr = o;
		}
		// OperandMem.
		//
		else {
			this.mem = o;
		}
	}
}

const ReqField = ZyjsField("EncReq");
export class EncoderRequest {
	resource: Resource;
	constructor(from?: DecodedInsn) {
		this.resource = new Resource(zydis.asm.zyjsNewEncReq(from?.resource.ref() ?? 0));
	}
	encode(at?: bigint) {
		return withStack((alloc) => {
			const tmp = alloc.allocate(MAX_INSN_LENGTH);
			const length =
				at != null
					? zydis.asm.zyjsEncReqEncodeAbs(this.resource.ref(), tmp, at)
					: zydis.asm.zyjsEncReqEncode(this.resource.ref(), tmp);
			return zydis.HEAPU8.slice(tmp, tmp + length);
		});
	}

	@ReqField
	machineMode!: MachineMode;
	@ReqField
	allowedEncodings!: EncodableEncoding;
	@ReqField
	mnemonic!: Mnemonic;
	@ReqField
	prefixes!: bigint;
	@ReqField
	branchType!: BranchType;
	@ReqField
	branchWidth!: BranchWidth;
	@ReqField
	addressSizeHint!: AddressSizeHint;
	@ReqField
	operandSizeHint!: OperandSizeHint;
	@ReqField
	operandCount!: number;
	@ReqField
	evexBroadcast!: BroadcastMode;
	@ReqField
	evexRounding!: RoundingMode;
	@ReqField
	evexSAE!: 1 | 0;
	@ReqField
	evexZeroingMask!: 1 | 0;
	@ReqField
	mvexBroadcast!: BroadcastMode;
	@ReqField
	mvexRounding!: RoundingMode;
	@ReqField
	mvexSAE!: 1 | 0;
	@ReqField
	mvexConversion!: ConversionMode;
	@ReqField
	mvexSwizzle!: SwizzleMode;
	@ReqField
	mvexEvictionHint!: 1 | 0;

	operand(n: number): EncoderOperand {
		const ptr = zydis.asm.zyjsEncReqRefOperand(this.resource.ref(), n);
		if (!ptr) {
			throw RangeError("Operand out of boundaries.");
		}
		return new EncoderOperand(this.resource.subresource(ptr));
	}

	static from(machine: MachineMode, mnemonic: Mnemonic, ...operands: OperandLike[]) {
		const res = new EncoderRequest();
		res.mnemonic = mnemonic;
		res.operandCount = operands.length;
		res.machineMode = machine;
		for (let n = 0; n !== operands.length; n++) {
			const op = operands[n];
			res.operand(n).set(op);
			if (typeof op === "object" && "seg" in op) {
				switch (op.seg) {
					case Register.CS:
						res.prefixes = InsnAttribute.HAS_SEGMENT_CS;
						break;
					case Register.DS:
						res.prefixes = InsnAttribute.HAS_SEGMENT_DS;
						break;
					case Register.ES:
						res.prefixes = InsnAttribute.HAS_SEGMENT_ES;
						break;
					case Register.GS:
						res.prefixes = InsnAttribute.HAS_SEGMENT_GS;
						break;
					case Register.FS:
						res.prefixes = InsnAttribute.HAS_SEGMENT_FS;
						break;
					case Register.SS:
						res.prefixes = InsnAttribute.HAS_SEGMENT_SS;
						break;
				}
			}
		}
		return res;
	}
}

export function encode(machine: MachineMode, mnemonic: Mnemonic, ...operands: OperandLike[]) {
	return EncoderRequest.from(machine, mnemonic, ...operands).encode();
}
export function encodeAt(at: bigint, machine: MachineMode, mnemonic: Mnemonic, ...operands: OperandLike[]) {
	return EncoderRequest.from(machine, mnemonic, ...operands).encode(at);
}

export function encodeNop(len: number) {
	return (len <= 512 ? withStack : withHeap)((alloc) => {
		const tmp = alloc.allocate(MAX_INSN_LENGTH);
		zydis.asm.zyjsEncNop(tmp, len);
		const res = zydis.HEAPU8.slice(tmp, tmp + len);
		alloc.free(tmp);
		return res;
	});
}
