module.exports =  [
    {
        ignores: ['node_modules/**'],
    },
    {
        // files: ['src/js/**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            indent: ['error', 'tab'],
            'linebreak-style': ['error', 'windows'],
            quotes: ['error', 'double'],
            semi: ['error', 'always'],
        },
    },
];