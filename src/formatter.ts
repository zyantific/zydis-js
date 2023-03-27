import { FormatterProperty, FormatterStyle } from "./enums.js";
import { HeapAllocator, Resource, withStack } from "./util.js";
import zydis from "./native.js";
import { DecodedInsn, DecodedOperand } from "./decoder.js";

const MAX_LENGTH = 512;
export class Formatter {
	resource: Resource;

	constructor(style: FormatterStyle) {
		this.resource = new Resource(zydis.asm.zyjsNewFormatter(style));
	}
	property(prop: FormatterProperty, value: boolean | number) {
		zydis.asm.zyjsFormatterSetProperty(this.resource.ref(), prop, +value);
		return this;
	}

	insn(value: DecodedInsn, address: bigint = 0n) {
		return withStack((alloc) => {
			const buf = alloc.allocate(MAX_LENGTH);
			zydis.asm.zyjsFormatterFormatInsn(this.resource.ref(), buf, MAX_LENGTH, value.resource.ref(), address);
			return zydis.UTF8ToString(buf, MAX_LENGTH);
		});
	}
	operand(insn: DecodedInsn, op: DecodedOperand, address: bigint = 0n) {
		return withStack((alloc) => {
			const buf = alloc.allocate(MAX_LENGTH);
			zydis.asm.zyjsFormatterFormatOperand(
				this.resource.ref(),
				buf,
				MAX_LENGTH,
				insn.resource.ref(),
				op.resource.ref(),
				address
			);
			return zydis.UTF8ToString(buf, MAX_LENGTH);
		});
	}

	// Lazy shader instances.
	//
	static #lazyMap = new Map<FormatterStyle, Formatter>();
	static #getLazy(style: FormatterStyle) {
		let instance = this.#lazyMap.get(style);
		if (!instance) {
			instance = new Formatter(style);
			this.#lazyMap.set(style, instance);
		}
		return instance;
	}
	static intel(): Omit<Formatter, "property"> {
		return this.#getLazy(FormatterStyle.INTEL);
	}
	static att(): Omit<Formatter, "property"> {
		return this.#getLazy(FormatterStyle.ATT);
	}
}
