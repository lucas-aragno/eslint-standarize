module.exports = {
    parser: 'babel-eslint',
    extends: [
        'standard',
        'standard-jsx',
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        'import',
        'node',
        'promise',
        'react',
        'standard'
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "react/prop-types": [0]
    },
    globals: {
        'it': false,
        'expect': false,
        'describe': false,
        'localStorage': false,
        'sessionStorage': false
    },
    settings: {
        react: {
            pragma: 'h'
        }
    }
}