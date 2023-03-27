import path from "path";
import { fileURLToPath } from "url";
import ResolveTypeScriptPlugin from "resolve-typescript-plugin";

export default {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		libraryTarget: "module",
		filename: "zydis.min.js",
		path: path.resolve(fileURLToPath(import.meta.url), "../"),
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
			},
		],
	},

	resolve: {
		plugins: [new ResolveTypeScriptPlugin()],

		extensions: [".ts", ".js", ".wasm", "..."],
		alias: {
			"./zydis.js": path.resolve(fileURLToPath(import.meta.url), "../dist/zydis.web.js"),
		},
	},
	experiments: {
		topLevelAwait: true,
		outputModule: true,
	},
};
