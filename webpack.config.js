import path from "path";
import { fileURLToPath } from "url";
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
			{
				test: /\.wasm$/,
				type: "asset/inline",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".wasm", "..."],
		alias: {
			"./zydis": path.resolve(fileURLToPath(import.meta.url), "../dist/zydis.web.js"),
		},
	},
	experiments: {
		topLevelAwait: true,
		outputModule: true,
	},
};
