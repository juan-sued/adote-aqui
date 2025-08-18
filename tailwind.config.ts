import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // ou './app/**/*' se estiver usando App Router
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [],
}
export default config
