import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importNewLines from "eslint-plugin-import-newlines";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";

export default [
    {
        extends: ["eslint:recommended", "plugin:react/recommended"],
        files: ["**/*.{js,jsx}"],
        ignores: ["dist"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: {
            react: {
                version: "18.3",
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "import-newlines": importNewLines,
            "@stylistic/js": stylisticJs,
            "@stylistic/jsx": stylisticJsx,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react/prop-types": 0,
            semi: [2, "always"],
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "import-newlines/enforce": ["error", { items: 3 }],
            "object-curly-newline": ["error", { minProperties: 1 }],
            "@stylistic/js/brace-style": [
                "error",
                "stroustrup",
                { allowSingleLine: true },
            ],
            "@stylistic/jsx/brace-style": [
                "error",
                "stroustrup",
                { allowSingleLine: true },
            ],
        },
    },
];
