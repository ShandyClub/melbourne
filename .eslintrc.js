module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:fp/recommended',
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['fp', 'react'],
    rules: {
        'fp/no-class': 'warn',
        'fp/no-this': 'warn',
    },
    settings: {
        react: {
            pragma: 'React',
            version: '16.0',
        },
    },
}
