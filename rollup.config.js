'use strict';

import cjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
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

function getOutput(min, sufix = '') {
  return {
    file: `dist/${safeName}${sufix}${(min ? '.min' : '')}.js`,
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

function getBabelPlugin() {
  return babel({
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/env',
        {
          targets: '> 2%, Firefox ESR, ie 11, safari 10, ios_saf 10',
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false
        }
      ]
    ],
    babelHelpers: 'bundled'
  });
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
  // Uncompressed config
  {
    input,
    output: getOutput(),
    plugins: [
      del({
        targets: 'dist/*',
        runOnce: true
      }),
      cjs(),
      resolve(),
      getBabelPlugin()
    ],
    external
  },

  // Compressed config
  {
    input,
    output: getOutput(true),
    plugins: [
      cjs(),
      resolve(),
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
  },

  // Embed version
  {
    input: 'src/embed.js',
    output: getOutput(true, '.embed'),
    plugins: [
      cjs(),
      resolve(),
      getBabelPlugin(),
      getTerserPlugin()
    ],
    external
  }
];
