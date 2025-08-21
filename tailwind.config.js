/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Importa tus fuentes personalizadas de globals.css
            fontFamily: {
                sans: ['var(--font-primary)', 'sans-serif'],
                serif: ['var(--font-display)', 'serif'],
            },
            // Importa tu paleta de colores de globals.css
            colors: {
                charcoal: 'var(--charcoal)',
                'red-gestium': 'var(--red-gestium)',
                'red-dark': 'var(--red-dark)',
                'red-light': 'var(--red-light)',
                gold: 'var(--gold)',
                'gold-dark': 'var(--gold-dark)',
                'gold-light': 'var(--gold-light)',
                navy: 'var(--navy)',
                steel: 'var(--steel)',
                platinum: 'var(--platinum)',
                silver: 'var(--silver)',
                graphite: 'var(--graphite)',
            },
            // Importa tus sombras personalizadas
            boxShadow: {
                minimal: 'var(--shadow-minimal)',
                medium: 'var(--shadow-medium)',
                strong: 'var(--shadow-strong)',
                red: 'var(--shadow-red)',
                'red-strong': 'var(--shadow-red-strong)',
                gold: 'var(--shadow-gold)',
                'gold-strong': 'var(--shadow-gold-strong)',
                dark: 'var(--shadow-dark)',
            },
            // Si quieres usar tus animaciones con las utilidades de Tailwind
            keyframes: {
                'pulse-glow-red': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 rgba(167, 26, 33, 0.4)',
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 0 10px rgba(167, 26, 33, 0)',
                    },
                },
            },
            animation: {
                'pulse-glow-red': 'pulse-glow-red 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}