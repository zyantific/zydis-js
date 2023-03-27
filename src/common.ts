import type { MemoryOperandType, Register } from "./enums.js";

export type OperandImm = { s: bigint; rel?: boolean } | { u: bigint; rel?: boolean };

export interface OperandPtr {
	segv: number;
	off: number;
}

export interface OperandReg {
	name: Register;
	is4?: boolean;
}

export interface OperandMem {
	type?: MemoryOperandType;
	seg?: Register;
	index?: Register;
	base?: Register;
	scale?: number;
	disp?: bigint;
}
