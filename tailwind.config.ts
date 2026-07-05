import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adi-blue': '#003DA5',
        'adi-green': '#00A86B',
        'adi-orange': '#FF6B35',
        'adi-gray-light': '#F5F5F5',
        'adi-gray-dark': '#333333',
        'adi-gray-text': '#555555',
        'adi-gray-caption': '#999999',
      },
      boxShadow: {
        'adi': '0 2px 8px rgba(0,0,0,0.1)',
        'adi-lg': '0 4px 16px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
