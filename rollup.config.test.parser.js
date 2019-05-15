import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: './src/parser/parser.ts',
    output: {
        file: './test/parser.js',
        format: 'cjs',
        name: 'synph_parser',
        sourcemap: true,
        globals: {

        }
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.test.json'
        }),
        commonjs(),
        //resolve(),
        
    ],
    external: [
        'antlr4'
    ]
};