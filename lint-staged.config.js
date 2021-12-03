module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => 'yarn lint:fix'
}
