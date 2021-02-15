import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import localResolve from "rollup-plugin-local-resolve";
import fs from "fs-extra";
import walk from "klaw-sync";
import path from "path";
const componentsPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const plugins = [
  babel({
    exclude: /node_modules/,
    extensions,
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [["styled-jsx/babel", { plugins: ["styled-jsx-plugin-sass"] }]],
  }),
  localResolve(),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

const external = (id) => /^react|react-dom|styled-jsx|next\/link/.test(id);

export default (async () => {
  await fs.remove(distPath);
  const files = await fs.readdir(componentsPath);
  const filesRecursive = walk(componentsPath, { nodir: true });

  const components = filesRecursive.map((file) => {
    const comPath = file.path;
    const name = path.basename(file.path, path.extname(file.path));

    return {
      name,
      url: comPath,
    };
  });

  return [
    ...components.map(({ name, url }) => ({
      input: url,
      output: [
        {
          file: url.replace(/src/, "dist"),
          format: "cjs",
          exports: "named",
          globals,
        },
      ],
      plugins,
      external,
    })),
  ];
})();
