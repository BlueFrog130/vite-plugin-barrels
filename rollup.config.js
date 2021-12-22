import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const deps = Object.keys(pkg.dependencies || {});

export default {
	input: "src/index.ts",
	external: [...deps, "fs", "fs/promises", "path"],
	output: [
		{ file: pkg.main, format: "cjs", sourcemap: true, exports: "auto" },
		{ file: pkg.module, format: "esm", sourcemap: true },
	],
	plugins: [
		typescript({
			tsconfig: "./tsconfig.json",
		}),
	],
};
