import * as zy from "zydis.js";

function printAndGetInsn(data: number[] | Uint8Array) {
	const dec = new zy.Decoder(zy.MachineMode.LONG_64, zy.StackWidth.WIDTH_64).decode(Buffer.from(data));

	console.log("Disassembly:", {
		disasm: Buffer.from(data).toString("hex") + "  " + zy.Formatter.intel().insn(dec, 0x0n),
		mnemonic: zy.Mnemonic[dec.mnemonic],
		visibleOperandCount: dec.visibleOperandCount,
		flags: dec.cpuFlags,
	});

	return dec;
}
console.log(`Zydis ${zy.getVersionString()} ready.`);
console.log(
	"Largest register enclosing AX in Long mode:",
	zy.Register[zy.register.getLargestEnclosing(zy.Register.AX, zy.MachineMode.LONG_64)]
);
console.log(
	"Largest register enclosing AX in Compat mode:",
	zy.Register[zy.register.getLargestEnclosing(zy.Register.AX, zy.MachineMode.LONG_COMPAT_32)]
);

const dec = printAndGetInsn([0xb8, 0x15, 0x81, 0x59, 0x0b]);
console.log("First operand:", dec.operand(1).get());

const enc = new zy.EncoderRequest(dec);
enc.operand(1).imm = 0x7eadbeefn;
console.log("Re-encoded:");
printAndGetInsn(enc.encode());

console.log("Encoding from scratch:");
printAndGetInsn(zy.encode(zy.MachineMode.LONG_64, zy.Mnemonic.MOVAPD, "XMM0", "XMM1"));
