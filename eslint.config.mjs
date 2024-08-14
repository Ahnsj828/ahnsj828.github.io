import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17 이상에서 JSX에 React를 임포트하지 않아도 되는 경우
      "react/prop-types": [
        "warn",
        {
          // PropTypes 검증을 추가
          skipUndeclared: false,
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
