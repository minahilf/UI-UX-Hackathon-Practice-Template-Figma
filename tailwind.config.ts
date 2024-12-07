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
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        text: "#C8C8C8", 
        text1: "#7D8184",
        text2: "#000000",
        secondary2: "#DB4444",
        button1: "#00FF66",
        button2: "#DB4444",
        hoverbutton: "#E07575",
        hoverbutton1: "#A0BCE0"
      },
       fontFamily: {
        'sans': ['Inter', 'sans-serif'], 
      },
     
    },
  },
  plugins: [],
};
export default config;
