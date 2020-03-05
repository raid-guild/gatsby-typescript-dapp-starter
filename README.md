# Gatsby TypeScript Dapp Starter

A starter kit for dapps with all the developer tooling preconfigured (front end only right now).

## 🚀 Getting started

- Clone the repo and install dependencies by running `yarn`
- Start a development server with `yarn develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting), [`type-check`](#static-type-checking) and [`lint`](#linting) are also available_
- Open `http://localhost:8000` in your browser

## ✨ Developer experience

### 🧹 Automatic code formatting

[Prettier][] aims to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting it is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### ✅ Static type checking

[TypeScript][] adds optional types to JavaScript, preventing several programming mistakes. For a quick guide about using React with it, please refer to the [React TypeScript Cheatsheet][].

[typescript]: https://www.typescriptlang.org/
[react typescript cheatsheet]: https://github.com/sw-yx/react-typescript-cheatsheet

### 🔍 Linting

Source code is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb][].

[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

### 🐶 Git Hooks for Commit and Push

Linting, code formatting, and typechecking are handled automatically using [Husky][] and [lint-staged] every time you make a commit or push to the remote repo.

[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged


## 🧰 Libraries

- [Web3 React](https://github.com/NoahZinsmeister/web3-react) preconfigured with React hooks to connect to wallets and automatically handle changes to accounts / network etc.
- [ChakraUI](https://chakra-ui.com) as the UI framework
- [React Helmet](https://github.com/nfl/react-helmet) to manage HTML head tags for SEO etc
- [React Testing Library](https://github.com/testing-library/react-testing-library) to test React Components and Hooks
- [Jest](https://jestjs.io) for unit testing
