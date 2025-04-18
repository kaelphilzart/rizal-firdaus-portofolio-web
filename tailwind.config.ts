import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif']
      },
	  colors: {
        primary: '#1f4037',       // deep green
        secondary: '#99f2c8',     // soft green
        background: '#0f0f0f',    // blackish background
        foreground: '#ffffff',    // text color
        muted: '#2d2d2d',         // dark gray
        accent: '#66ffcc',        // neon green accent
      }
    }
  },
  plugins: []
}

export default config
