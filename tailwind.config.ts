// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#e2e8f0',
        primary: '#14b8a6',
        'primary-dark': '#0d9488',
      },
      backgroundImage: {
        'ai-bg': 'linear-gradient(135deg, #0f172a, #1e293b)', // futuristic gradient
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
