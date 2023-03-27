import zydis from "./native.js";

//
// Low level details.
//
abstract class IAllocator {
	abstract allocate(n: number): number;
	abstract free(p: number): void;
	str(s: string): number {
		const upperbound = (s.length << 2) + 1;
		const ptr = this.allocate(upperbound);
		zydis.stringToUTF8(s, ptr, Infinity);
		return ptr;
	}
	buf(input: ArrayLike<number>): number {
		const ptr = this.allocate(input.length);
		zydis.HEAPU8.set(input, ptr);
		return ptr;
	}
}
export const StackAllocator = new (class StackAllocator extends IAllocator {
	allocate(n: number): number {
		return zydis.asm.stackAlloc(n) as number;
	}
	free(p: number): void {}
})();
export const HeapAllocator = new (class HeapAllocator extends IAllocator {
	allocate(n: number): number {
		return zydis.asm.malloc(n) as number;
	}
	free(p: number): void {
		zydis.asm.free(p);
	}
})();

export class Resource {
	static readonly finalizer = new FinalizationRegistry((heldValue) => {});

	#parent?: Resource;
	#ptr: number;
	readonly #token = {};
	constructor(ptr: number) {
		this.#ptr = ptr;
		if (this.#ptr) {
			Resource.finalizer.register(this, this.#ptr, this.#token);
		}
	}

	subresource(ptr: number) {
		const res = new Resource(0);
		res.#parent = this;
		res.#ptr = ptr;
		return res;
	}

	ref() {
		return this.#ptr;
	}
	unref() {
		if (this.#ptr && !this.#parent) {
			HeapAllocator.free(this.#ptr);
			this.#ptr = 0;
			Resource.finalizer.unregister(this.#token);
		}
	}
}

export function ZyjsField(ns: string) {
	return function (target: any, propertyKey: any) {
		const getter = zydis.asm[`zyjs${ns}Get_${propertyKey}`];
		const setter = zydis.asm[`zyjs${ns}Set_${propertyKey}`];
		Object.defineProperty(target, propertyKey, {
			get(this: { resource: { ref(): number } }) {
				return getter(this.resource.ref());
			},
			set(this: { resource: { ref(): number } }, value: any) {
				return setter(this.resource.ref(), value);
			},
		});
	};
}

export function withStack<R extends any>(callback: (allocator: IAllocator) => R): R {
	const { stackSave, stackRestore } = zydis.asm;
	const stack = stackSave();
	try {
		return callback(StackAllocator);
	} finally {
		stackRestore(stack);
	}
}
export function withHeap<R extends any>(callback: (allocator: IAllocator) => R): R {
	return callback(HeapAllocator);
}
