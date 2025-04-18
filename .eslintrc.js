// https://eslint.org/
module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "code": 512,
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": ["@typescript-eslint","prettier"],
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "rules": {
        // https://github.com/prettier/eslint-plugin-prettier
        "prettier/prettier": "off",
        "comma-dangle": 0,
        "no-unused-vars": "warn",
        "no-unexpected-multiline": "warn",
        "prefer-const": "warn",

        "@typescript-eslint/ban-ts-comment":"warn",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-inferrable-types": "off"
    },
    "settings": {},
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "es6": true
    }
}
