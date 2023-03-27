type Assembly = {
	memory: WebAssembly.Memory;
} & {
	[k: string]: (...args: any[]) => any;
};

interface M {
	ready: Promise<ThisType>;
	_main(): number;
	_malloc(size: number): number;
	_free(ptr: number): void;
	UTF8ToString(ptr: number, maxBytes?: number): string;
	stringToUTF8(str: string, ptr: number, maxBytes: number): string;

	HEAP8: Int8Array;
	HEAP16: Int16Array;
	HEAP32: Int32Array;
	HEAP64: BigInt64Array;
	HEAPU8: Uint8Array;
	HEAPU16: Uint16Array;
	HEAPU32: Uint32Array;
	HEAPU64: BigUint64Array;

	asm: Assembly;
}

export default function (): Promise<M>;
