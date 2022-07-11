/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                whiteGrayish: '#E8E7F6',
                paleWhite: '#F1F4F5',
                lightGray: '#CACCD9',
                purple: '#5C4EBD',
                brightRed: '#FA533C',
                lightPink: '#FBE9E5',
            },
        },
    },
    plugins: [],
};
