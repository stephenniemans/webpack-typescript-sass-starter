module.exports = {
    root: true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: 'standard-with-typescript',
            parserOptions: {
                project: ['tsconfig.json'],
                createDefaultProgram: true,
            },
            plugins: ['@typescript-eslint'],
            rules: {
                /**
                 * Customize rules as you see fit
                 */
                'max-lines': ['warn', { max: 500, skipComments: true }],
                radix: [2, 'always'],
                'no-console': 'warn',
                'comma-dangle': ['error', 'always-multiline'],
                'space-before-function-paren': [
                    'error',
                    {
                        named: 'never',
                        anonymous: 'always',
                        asyncArrow: 'always',
                    },
                ],
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'none',
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false,
                        },
                    },
                ],
                '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
                '@typescript-eslint/restrict-template-expressions': ['warn'],
                '@typescript-eslint/no-unused-vars': ['warn'],
                '@typescript-eslint/no-invalid-void-type': ['off'],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/space-before-function-paren': 'off', // already part of regular eslint rule
                '@typescript-eslint/strict-boolean-expressions': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/consistent-type-assertions': 'off',
                '@typescript-eslint/promise-function-async': 'off',
                '@typescript-eslint/no-useless-constructor': 'off',
                '@typescript-eslint/indent': 'off',
            },
        },
    ],
}
