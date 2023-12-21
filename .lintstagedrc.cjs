/** @type {import("lint-staged").Config} */
module.exports = {
  '*.{js,jsx,ts,tsx,astro}': ['eslint --fix'],
  '*.{json,css,js,jsx,ts,tsx,md,mdx,astro}': ['prettier --write']
}
