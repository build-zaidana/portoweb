/** @type {import("prettier").Config} */
export default {
  printWidth: 110,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"], // tailwind plugin must stay last
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
