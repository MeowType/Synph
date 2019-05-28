import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/test/test.ts',
    output: {
        format: 'iife',
        name: 'synph',
        sourcemap: false,
        file: 'test/test.js'
    },
    external: ['vue', 'vue-property-decorator'],
    plugins: [
        typescript({
            tsconfig: './tsconfig.test.json',
            clean: true,
        }),
        resolve(),
        commonjs(),
        css(),
        vue({
            css: false
        })
    ]
}