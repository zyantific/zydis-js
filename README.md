# zydis.js

Zydis.js is a TypeScript library wrapping Zydis encoder, decoder and formatter features using WebAssembly supporting both NodeJS and Web environments.

## Installation

---

For use without a package manager in a browser environment, you can use the unpkg CDN or your own assets directory to include it directly in your ESM module.

```html
<script type="module">
	import * as zy from "https://www.unpkg.com/zydis.js/zydis.min.js";
	const ins = new zy.Decoder(zy.MachineMode.LONG_64, zy.StackWidth.WIDTH_64).decode(
		new Uint8Array([0xb8, 0x15, 0x81, 0x59, 0x0b])
	);
	console.log(zy.Formatter.intel().insn(ins, 0x0n)); // Prints 'mov eax, 0xB598115'.
</script>
```

Otherwise you can simply install it via NPM and start using it in either environment using the command:

```
npm install zydis.js
```
