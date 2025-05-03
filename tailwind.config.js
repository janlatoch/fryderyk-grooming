import { colors as defaultColors } from 'tailwindcss/defaultTheme'

module.exports = {
    theme: {
        ...defaultColors,
        colors: {
            primary: {
                100: '#C4C3E3',
                200: '#504E76',
                300: '#FDF8E2',
                400: '#A3B565',
                500: '#FCDD9D',
                600: '#F1643E',
                //   700: '#026592',
                //   800: '#014C6E',
                //   900: '#013349',
            },
            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },
        },
        lineHeight: {
            hero: '4.5rem',
        },
    }
}