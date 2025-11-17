import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        salesforce: {
          blue: '#10B981',
          darkblue: '#047857',
          cloud: '#D1FAE5',
          border: '#DDDBDA',
          gray: '#706E6B',
        }
      }
    },
  },
  plugins: [],
};
export default config;
