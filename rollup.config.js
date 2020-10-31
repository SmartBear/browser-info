'use strict';

import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

import $package from './package.json';

const input = 'src/index.js';
const external = Object.keys($package.dependencies || []);
const globals = {};

for(const ext of external) {
  globals[ext] = ext;
}

const safeName = $package.name.replace(/@/g, '').replace(/\//g, '-');

function getOutput(sufix = '') {
  return {
    file: `dist/${safeName}${sufix}.js`,
    format: 'umd',
    name: $package.name,
    banner: `/* ${$package.name} v${$package.version} ` +
    `| Copyright ${new Date().getFullYear()} (c) SmartBear Software and contributors ` +
    '| https://github.com/SmartBear/browser-info/blob/master/LICENSE ' +
    '*/',
    globals,
    sourcemap: true
  };
}

function getTerserPlugin() {
  return terser({
    output: {
      comments: (node, comment) => {
        if (comment.type === "comment2") {
          // multiline comment
          return /LICENSE|\(c\)/.test(comment.value);
        }
        return false;
      }
    }
  });
}

export default [
  // Compressed config
  {
    input,
    output: getOutput(),
    plugins: [
      del({
        targets: 'dist/*'
      }),
      getTerserPlugin()
    ],
    external
  },

  // Embed version
  {
    input: 'src/embed.js',
    output: getOutput('.embed'),
    plugins: [
      getTerserPlugin()
    ],
    external
  }
];
