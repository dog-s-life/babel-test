module.exports = {
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/env',
            // {
            //     modules: false,
            //     useBuiltIns: false
            // }
        ]
    ],
    plugins: [
        [
            '@babel/transform-runtime',
            {
                corejs: false,
                regenerator: false
            }
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                version: '2023-11'
            }
        ],
    ]
};
