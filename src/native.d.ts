export const ready: Promise<ThisType>;
export function _main(): number;
export function _malloc(size: number): number;
export function _free(ptr: number): void;
export function UTF8ToString(ptr: number, maxBytes?: number): string;
export function stringToUTF8(str: string, ptr: number, maxBytes: number): string;

export const HEAP8: Int8Array;
export const HEAP16: Int16Array;
export const HEAP32: Int32Array;
export const HEAP64: BigInt64Array;
export const HEAPU8: Uint8Array;
export const HEAPU16: Uint16Array;
export const HEAPU32: Uint32Array;
export const HEAPU64: BigUint64Array;

type Assembly = {
	memory: WebAssembly.Memory;
} & {
	[k: string]: (...args: any[]) => any;
};
export const asm: Assembly;
