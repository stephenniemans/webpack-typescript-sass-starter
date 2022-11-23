# Webpack + TypeScript + SASS Starter

## Installation

To install:

```bash
npm install
```

To clean and reinstall all dependencies:

```bash
npm reinstall
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

