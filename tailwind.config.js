module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary': {
                    'DEFAULT': "#851197",
                    'light': "#fff9ec",
                    'dark': "#451b05",
                    '50': '#fcf3ff',
                    '100': '#fae7ff',
                    '200': '#f4cdff',
                    '300': '#efa6ff',
                    '400': '#e671ff',
                    '500': '#d63bfa',
                    '600': '#b71ad6',
                    '700': '#a113b8',
                    '800': '#851197',
                    '900': '#6f147b',
                    '950': '#490053',
                },
                secondary: {
                    'DEFAULT': "#123ebb",
                    'light': "#eef6ff",
                    'dark': "#122459",
                    '50': '#eef6ff',
                    '100': '#d8ebff',
                    '200': '#badcff',
                    '300': '#8ac7ff',
                    '400': '#53a9ff',
                    '500': '#2b84ff',
                    '600': '#0f60fc',
                    '700': '#0d4ce8',
                    '800': '#123ebb',
                    '900': '#153a93',
                    '950': '#122459',
                }
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '68': '17rem',
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
                '96': '24rem',
                '100': '25rem',
                '110': '27.5rem',
                '112': '28rem',
                '120': '30rem',
                '140': '35rem',
            },
            borderRadius: {
                '4xl': "2rem"
            },
            boxShadow: {
                'tabbar': ' 0 -6px 10px 0px rgba(0, 0, 0, 0.05)',
            }
            ,
            order: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9',
                '10': '10',
                '11': '11',
                '12': '12',
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
                '18': '18',
                '19': '19',
                '20': '20',
            }

        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
                '2xl': '1350px',
            },
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width',
            'spacing': 'margin, padding',
        },

    },
    variants: {
        space: ['responsive', 'direction'],
        extend: {},
    },
    plugins: [

    ],
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