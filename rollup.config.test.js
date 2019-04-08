import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './test/test.tsx',
    output: {
        file: './test/test.js',
        format: 'iife',
        name: 'synph_test',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.test.json'
        }),
        resolve(),
    ],
    external: [
        'react', 'react-dom'
    ]
};