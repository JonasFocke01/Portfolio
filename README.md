# Svelte-template

This template represents a ready-to-start sveltekit project with this features:

- **TailwindCSS**
  - ready to use
- **Jest-testing** with the **svelte-testing-library**
  - look at the examples provided
- **.env** ready
  - Just use `process.env.USERNAME` in the file you want to import that
  - This is **excluded** from git, so you can store your password there but **do not put your password in the .env.example with is **not excluded**!**
- **date-nfs** (to make js dates better)
  - docs: `https://date-fns.org/`
- **js-sha256** (for password encryption)
  - docs: `https://www.npmjs.com/package/js-sha256#usage`
- **prettier**
  - docs: `https://prettier.io/`
- **toast-notifications** ready to use
  - Usage
    - `import { toast } from '@zerodevx/svelte-toast'`
    - `<Button on:click={() => toast.push('Hello world!')}>EMIT TOAST</Button>`
  - docs: `https://github.com/zerodevx/svelte-toast#Svelte`
    - step one already done
- **typescript support** in svelte and in test files
  - docs: `https://www.typescriptlang.org/`
- **basic components** with pre-written tests and documentation
  - the componets are far from final, so you can expect updates
- _very_ basic **site setup**

## Inststallation

Just run `npm i` and create an empty `.env` file. _ready_

## Testing

To Run tests, you can just run `npm run test` to start testing in watchmode.

Tests are written by utilizing jest and the svelte-testing-library.
The tests are ready to be written in typescript.

## NPM Scripts

`npm run `

- `dev`: to run the testserver
- `build`: to run all testsuites, then build the app, then preview the app on local server
- `preview`: to preview the current build (also runns with `build`)
- `test:once`: to run all testsuites and generate a code coverage report afterwards (also runns with `build`)
- `test`: to start testing in watchmode

## Theming

Themeing is done via tailwindcss.
In the file `tailwind.config.js` you can configure the colors as you like.
Currently there are

- primary: dark-blue
- secondary: lighter-blue
- accent: orange
- success: green
- warning: yellow-orange
- error: red
- info: light-blue
- surface: another blue shade
- text: white
- black: black

This colors are available everywhere and are allready used in the components
