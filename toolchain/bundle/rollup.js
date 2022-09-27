import cleanup from "rollup-plugin-cleanup";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import path from "path";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const babelPath = path.join(__dirname, "./babel.config.js");

export default ({ alias, esbuild, extensions, input, minify = true, output } = {}) => ({
  input,
  output: [
    {
      dir: ".",
      format: "es",
      sourcemap: true,
      ...output,
    },
  ],
  external: (id) => !/^[./]/.test(id),
  plugins: [
    resolve({ extensions: extensions ?? [".tsx", ".ts", ".js"] }),
    bundle({ alias, esbuild }),
    commonjs({ include: [/[\\/]node_modules/] }),
    postcss({ modules: true, extract: true }),
    externals(),
    minify && terser(),
    cleanup(),
  ],
  watch: { include: "src/**" },
});

function bundle({ alias, ...opts } = {}) {
  return {
    name: "esbuild-with-babel-jsx-runtime",
    async transform(code, id) {
      const loader = esbuildLoader(id);
      const [babel, esbuild] = await Promise.all([import("@babel/core"), import("esbuild")]);

      const plugins = [[require.resolve("babel-plugin-module-resolver"), { alias }]];
      const { code: transformed } = babel.transformSync(code, {
        filename: id,
        configFile: false,
        extends: babelPath,
        plugins,
        presets,
        sourceType: "module",
      });

      if (transformed == null) {
        return { code: transformed ?? undefined };
      }

      const { code: compiled, map } =
        (await esbuild.transform(transformed, {
          loader,
          target: "esnext",
          ...opts.esbuild,
        })) ?? {};

      return { code: compiled || undefined, map: map || null };
    },
  };
}

const ESBUILD_MATCH = /\.(ts|js)x?$/;
function esbuildLoader(id) {
  return id.match(ESBUILD_MATCH)?.[1];
}
