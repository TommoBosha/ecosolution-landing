/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F3F5FA",
        neutral200: "#DCEFD8",
        bg_accent: "#173D33",
        bg_light: "#97D28B",
        bg_card: "#EAEDF1",
        backdrop: "rgba(23, 61, 51, 0.25)",
      },
      textColor: {
        primary: "#173D33",
        secondary: "#97D28B",
        pagination: "rgba(23, 61, 51, 0.25)",
        err: "#D28B8B",
        link: "rgba(255, 255, 255, 0.25)",
      },
      stroke: {
        primary: "#97D28B",
        secondary: "#173D33",
        pagination: "rgba(23, 61, 51, 1)",
        trans: "rgba(255, 255, 255, 0.25)",
      },
      flexBasis: {
        md: "calc((100% - 24px) / 2)",
        xl: "calc((100% - 48px) / 2)",
      },
      width: {
        menu: "calc(100% - 40px)",
      },
      height: {
        menu: "calc(100vh - 60px)",
      },

      fill: {
        accent: "#173D33",
        secondary: "#97D28B",
      },
      outlineColor: {
        primary: "#97D28B",
      },
      borderColor: {
        primary: "#97D28B",
        secondary: "#173D33",
        err: "#D28B8B",
      },
    },
  },
  plugins: [],
};
