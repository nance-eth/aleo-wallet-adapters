import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: "tsconfig.json" }),
      commonjs(),
      nodeResolve(),
    ],
    external: ["@puzzlehq/sdk", "@demox-labs/*"],
  },
];
