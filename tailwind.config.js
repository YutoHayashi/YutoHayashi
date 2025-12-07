module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            'sans': ['Hiragino Sans'],
            'notosans': ['Noto Sans JP'],
            'futura': ['Futura Std'],
        },
        extend: {
            fontSize: Object.assign(
                {
                    base: '62.5%',
                },
                ...Array.from(Array(50)).map((_, i) => ({ [i]: `${(i * .1).toPrecision(2)}rem` }))
            ),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
