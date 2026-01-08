/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                argyle: {
                    purple: '#6B21A8', // deep purple
                    blue: '#38BDF8',   // light blue
                    white: '#F8FAFC',  // off-white
                }
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee 30s linear infinite reverse',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '0%, 100%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
}
