module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        /* “react/jsx-filename-extension”: [“warn”, { extensions: [“.jsx”, “.js”] }] - basically allow us to write jsx code in filesjs; */
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        /* “import/prefer-default-export”: “off” - This rule says that when you have only one export inside a file, it isexport default, I disable it because there are cases, which not necessarily, I want it to be default. */
        'import/prefer-default-export': 'off',
        /* quotes	enforce the consistent use of either backticks, double, or single quotes */
        quotes: ['error', 'single'],
        /* https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components */
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-unused-expressions': 'off'
    },
}

/* More rules context in https://henriquetavares.com/setting-eslint-on-reactjs-and-react-native/ */
