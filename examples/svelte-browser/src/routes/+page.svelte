<script lang="ts">
	import * as zy from 'zydis.js';

	let decoder = new zy.Decoder(zy.MachineMode.LONG_64, zy.StackWidth.WIDTH_64);
	const formatter = new zy.Formatter(zy.FormatterStyle.INTEL);

	const machineModes = {
		Real: [zy.MachineMode.REAL_16, zy.StackWidth.WIDTH_16],
		'16 Bit': [zy.MachineMode.LEGACY_16, zy.StackWidth.WIDTH_16],
		'32 Bit': [zy.MachineMode.LONG_COMPAT_32, zy.StackWidth.WIDTH_32],
		'64 Bit': [zy.MachineMode.LONG_64, zy.StackWidth.WIDTH_64]
	} as const;
	let currentMode = '64 Bit';
	function switchModes(mode: string) {
		currentMode = mode;
		const [m, s] = machineModes[mode as keyof typeof machineModes];
		decoder = new zy.Decoder(m, s);
	}

	let hexInput = '48 31 ff 48 31 f6 48 31 d2 48 31 c0 50 48 bb 2f 62 69 6e 2f 2f 73 68 53 48 89 e7 b0 3b 0f 05';
	function disassembleHex(decoder: zy.Decoder, inp: string) {
		const bytes = [];
		for (const b of inp.replaceAll('0x', ' ').matchAll(/[\da-f]{1,2}/gi)) {
			bytes.push(parseInt(b[0], 16));
		}
		const byteArray = new Uint8Array(bytes);

		const output = [];
		let baseAddress = 0n;
		for (let offset = 0; offset !== byteArray.length; ) {
			try {
				const ins = decoder.decode(byteArray.slice(offset));
				output.push(formatter.insn(ins, baseAddress + BigInt(offset)));
				offset += ins.length;
			} catch {
				output.push(`db ${byteArray[offset].toString(16).padStart(2, '0')}`);
				offset++;
			}
		}
		return output.join('\n');
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main
	class="w-full h-screen pt-4 text-neutral-300 bg-neutral-900 flex flex-col items-center origin-center object-center place-items-center"
>
	<section class="flex flex-row gap-2">
		{#each Object.keys(machineModes) as mode}
			<input type="radio" name="arch" class="hidden" autocomplete="off" checked={currentMode === mode} />
			<label for="arch">
				<button class="p-2 rounded-md {currentMode === mode ? 'bg-slate-800' : 'bg-slate-700'}" on:click={switchModes.bind(null, mode)}>
					{mode}
				</button>
			</label>
		{/each}
	</section>
	{currentMode}
	<section class="flex flex-row w-full place-content-evenly p-4">
		<div>
			<textarea class="text-sm bg-neutral-800 overflow-clip p-4 w-96 h-64 rounded-lg" bind:value={hexInput} />
		</div>
		<div>
			<textarea class="text-sm bg-neutral-800 p-4 w-96 h-64 rounded-lg" disabled>{disassembleHex(decoder, hexInput)}</textarea>
		</div>
	</section>
</main>
