'use strict';

import babel from 'rollup-plugin-babel';
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
const output = function(min) {
  return {
    file: 'dist/' + safeName + (min ? '.min' : '') + '.js',
    format: 'umd',
    name: $package.name,
    banner: `/* ${$package.name} v${$package.version} ` +
    `| Copyright ${new Date().getFullYear()} (c) SmartBear Software and contributors ` +
    '| https://github.com/SmartBear/browser-info/blob/master/LICENSE ' +
    '*/',
    globals,
    sourcemap: true
  };
};

const getBabelPlugin = function() {
  return babel({
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'entry',
          corejs: '3.6',
          modules: false
        }
      ]
    ]
  });
};

export default [
  // Uncompressed config
  {
    input,
    output: output(),
    plugins: [
      del({
        targets: 'dist/*',
        runOnce: true
      }),
      getBabelPlugin()
    ],
    external
  },

  // Compressed config
  {
    input,
    output: output(true),
    plugins: [
      getBabelPlugin(),
      terser({
        output: {
          comments: (node, comment) => {
            if (comment.type === "comment2") {
              // multiline comment
              return /LICENSE|\(c\)/.test(comment.value);
            }
            return false;
          }
        }
      })
    ],
    external
  }
];
