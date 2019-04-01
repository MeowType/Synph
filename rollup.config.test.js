export default {
    input: './test/tsout/test/test.js',
    output: {
        file: './test/test.js',
        format: 'iife',
        name: 'synph_test',
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }
};