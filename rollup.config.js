import multiInput from 'rollup-plugin-multi-input';
import { babel } from '@rollup/plugin-babel';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
    input: ['./src/*.ts'],
    output: {
        dir: './dist',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: './src'
    },
    external: [
        /node_modules/
    ],
    plugins: [
        multiInput(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts']
        })
    ]
};

export default options;
