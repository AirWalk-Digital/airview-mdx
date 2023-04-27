import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs'
import json from '@rollup/plugin-json';

export default [
    {
        input: 'src/index.js',
        output: {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
        },
        plugins: [
            json(),
            commonjs({
                include: 'node_modules/**',
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                namedExports: {
                  'node_modules/react/index.js': [
                    'cloneElement',
                    'createContext',
                    'Component',
                    'createElement',
                  ],
                  'node_modules/react-dom/index.js': ['render', 'hydrate'],
                  'node_modules/react-is/index.js': [
                    'isElement',
                    'isValidElementType',
                    'ForwardRef',
                    'Memo',
                    'isFragment'
                  ]
                }
              }),
            postcss({
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react']
            }),
            resolve({
                extensions: ['.js', '.jsx'],
                preferBuiltins: true,
                dedupe: ['react', 'react-dom', 'react-is'],
            }),
            external()
        ],
    }
]