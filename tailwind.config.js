/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.900", "currentColor")
    }),
    extend: {
      boxShadow: {
        custom:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rbga(0, 0, 0, 0.02)"
      }
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  },
  plugins: []
};
