/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlaypenSans: ['PlaypenSans', 'sans-serif'],
        Nosifer: ['Nosifer', 'sans-serif'],
        RubikWetPaint: ['RubikWetPaint', 'sans-serif'],
        IndieFlower: ['IndieFlower', 'sans-serif'],
      },
      fontWeight: {
        'playSans-regular': '500',
        'palysans-semiBold': '600',
        'playSans-bold': '700',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
