import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      'primary-pink':'#ff6d73',
      'txt-blue':'#002a47',
      'txt-green':'#21492e',
      'txt-gray':'#64696d',
      'txt-pink':'#B55154',
      'dark-pink':'#b55154',
      'dark-gray':'#373a3c',
      'light-pink':'#fff4f6',
      'light-gray':'#f0f0f1',
      'light-green':'#edf7f1',
      'b-gray': '#E6EAED',
      'b-pink': '#FF7276'
     },
     boxShadow: {
      'dShadow': '0px 15px 21px 0px #0000000A',
      'hShadow':'0px 26px 35px 0px #00000014;'
    },

    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      spin: 'spin 2s linear infinite',
    },
    },
  },
  plugins: [],
};
export default config;
