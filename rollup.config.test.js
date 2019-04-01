export default {
    input: './test/tsout/test/test.js',
    output: {
        file: './test/test.js',
        format: 'iife',
        name: 'synph_test',
        sourcemap: true,
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }
};