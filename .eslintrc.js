module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
    ],
    rules: {
        "no-unused-vars": "off",
        // "react/sort-prop-types": "error",
        // "react/jsx-closing-bracket-location": "warn",
        // "react/jsx-tag-spacing": "warn",
        // "react/jsx-curly-spacing": "warn",
        "react/jsx-boolean-value": "warn",
        // "react/jsx-no-bind": "warn",
        // "react/self-closing-comp": "warn",
        "react/require-render-return": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    }
};
