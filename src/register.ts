import { MachineMode, Register, RegisterClass } from "./enums.js";
import zydis from "./native.js";

export function encode(cl: RegisterClass, id: number): Register {
	const res = zydis.asm.zyjsRegisterEncode(cl, id);
	if (res === Register.NONE) throw Error("Failed encoding register.");
	return res;
}
export function getId(reg: Register): number {
	return zydis.asm.zyjsRegisterGetId(reg);
}
export function getClass(reg: Register): RegisterClass {
	return zydis.asm.zyjsRegisterGetClass(reg);
}
export function getWidth(reg: Register, mode: MachineMode): number {
	return zydis.asm.zyjsRegisterGetWidth(reg, mode);
}
export function getWidthFromClass(cl: RegisterClass, mode: MachineMode): number {
	return zydis.asm.zyjsRegisterClassGetWidth(cl, mode);
}
export function getLargestEnclosing(reg: Register, mode: MachineMode): Register {
	return zydis.asm.zyjsRegisterGetLargestEnclosing(reg, mode);
}
export function from(reg: string) {
	reg = reg.toUpperCase();
	if (reg in Register) {
		return Register[reg as keyof typeof Register];
	}
	throw Error("Invalid register name");
}
