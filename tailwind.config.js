export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D7DBCD",
          200: "#AFB79C",
          300: "#87946A",
          400: "#5F7139",
          500: "#4B5320", // Main olive green
          600: "#3C4219",
          700: "#2D3213",
          800: "#1E210C",
          900: "#0F1006",
        },
        secondary: {
          100: "#CCD1D9",
          200: "#99A3B4",
          300: "#66768F",
          400: "#33486A",
          500: "#0A1128", // Navy blue
          600: "#080E20",
          700: "#060A18",
          800: "#040710",
          900: "#020308",
        },
        accent: {
          100: "#F5D9DC",
          200: "#ECB3BA",
          300: "#E28E97",
          400: "#D96875",
          500: "#B22234", // Red
          600: "#8E1B2A",
          700: "#6A141F",
          800: "#470E15",
          900: "#23070A",
        },
        gold: {
          100: "#F7F0DE",
          200: "#EFE1BD",
          300: "#E7D29D",
          400: "#DFC37C",
          500: "#D4AF37", // Gold
          600: "#A98C2C",
          700: "#7F6921",
          800: "#554616",
          900: "#2A230B",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button': '0 4px 6px -1px rgba(75, 83, 32, 0.4), 0 2px 4px -1px rgba(75, 83, 32, 0.06)',
      },
    },
  },
  plugins: [],
}