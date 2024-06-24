import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideFromDownAndFade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)',
            visibility: 'hidden',
          },
          '1%': { visibility: 'visible' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-from-down-and-fade-1':
          'slideFromDownAndFade 0.6s ease-in-out 0.1s both',
        'slide-from-down-and-fade-2':
          'slideFromDownAndFade 0.6s ease-in-out 0.2s both',
        'slide-from-down-and-fade-3':
          'slideFromDownAndFade 0.6s ease-in-out 0.3s both',
        'slide-from-down-and-fade-4':
          'slideFromDownAndFade 0.6s ease-in-out 0.4s both',
        'slide-from-down-and-fade-5':
          'slideFromDownAndFade 0.6s ease-in-out 0.5s both',
        'slide-from-down-and-fade-6':
          'slideFromDownAndFade 0.6s ease-in-out 0.6s both',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // how to make my own css tailwind dynamic class
    // plugin(function ({ matchUtilities, theme }:{matchUtilities:any, theme:any}) {
    //   matchUtilities(
    //     {
    //       'title': (value:number) => ({
    //         fontSize: value,
    //       }),
    //     },
    //     { values: theme('fontSize') }
    //   );
    // }),
  ],
};
export default config;
