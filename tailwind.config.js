module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
}