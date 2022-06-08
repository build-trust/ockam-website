module.exports = {
  extends: ['@masterborn/eslint-config/frontend/typescript', 'prettier'],
  plugins: ['@emotion'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'prefer-arrow-callback': 'off',
    'no-restricted-exports': 'warn',
  },
};
