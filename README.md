# Webpack + TypeScript + SASS Starter

## Installation

First clone the project:

```bash
git clone https://github.com/stephenniemans/webpack-typescript-sass-starter.git
```

Remove the origin:

```bash
git remote rm origin
```

Install dependencies:

```bash
npm install
```

## Development Server

To start the development server with auto-reloading:

```bash
npm start
```

By default the development server will be run on: `http://localhost/8080`

To use a different port, change the value in `webpack.config.js`:

```js
  // webpack.config.js
  devServer: {
    port: 8080 // <- Change this value
  }
```

## Build

To generate a bundle in the `dist` folder:

```bash
npm run build
```

To reinstall all dependencies and rebuild:

```bash
npm run rebuild
```

## Linter

To run Eslint:

```bash
npm run lint
```

Or:

```bash
npm run build
```

