module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['next/core-web-vitals', 'plugin:import/recommended', 'plugin:import/typescript', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'import/order': ['error'],
    },
}
