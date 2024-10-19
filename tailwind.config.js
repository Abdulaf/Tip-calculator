module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-spinner": {
          "-moz-appearance": "textfield",
          "-webkit-appearance": "none",
        },
        ".no-spinner::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
        ".no-spinner::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
        },
      });
    },
  ],
};
