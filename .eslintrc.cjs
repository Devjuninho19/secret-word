module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Esta opção irá detectar automaticamente a versão do React em seu projeto
    },
  },
  plugins: ["react"],
  rules: {
    "react/jsx-no-target-blank": "off", // Se você deseja desativar essa regra
    // Adicione outras regras específicas do seu projeto, se necessário
  },
};
