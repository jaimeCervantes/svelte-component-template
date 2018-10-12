# svelte-component-template

A base for building shareable Svelte components. Based on [Svelte component template](https://github.com/sveltejs/component-template)


```bash
git clone https://github.globant.com/jaime-cervantes/svelte-component-template my-new-component
cd my-new-component
npm install # or yarn
```

Your component's source code lives in `src/index.html`.

## Your component in action

1. `npm start`
2. Open your browser with `http://localhost:3000/demo` to see your component in action!

## Unit testing

Your unit test should be in `/test/` directory, to see your test just run `npm start` and go to `http://localhost:3000/test`

If you want to split your tests in several files just remember import these files in `/test/tests.spec.js`

## ¿How to create a native web component?

In the rollup.config.js file you can change the Svelte compiler option `customElement` to `true`
```
plugins: [
  svelte({
    cascade: false,
    store: true,
    customElement: false // Change this property to true
  })
]
```
Then follow the instructions described in the **Your component in action** section

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.html`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
