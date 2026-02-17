# rat-pwa

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/j-incorp/rat-pwa/checks.yml?label=checks)
![GitHub Release](https://img.shields.io/github/v/release/j-incorp/rat-pwa)
![GitHub License](https://img.shields.io/github/license/j-incorp/rat-pwa)

## about

(r)eact (a)pp (t)emplate (p)rogressive (w)eb (a)pp!

a template to quickly start building react applications using tanstack router and shad.

## get started

```bash
# 1. clone the repo
git clone https://github.com/j-incorp/rat-pwa
# 1.1 optionally remove existing git repo and init your own
rm -rf .git
git init

# 2. install pnpm if missing
npm i -g pnpm

# 3. install packages
pnpm install

# 4. run your app
pnpm run dev

# 5. connect on localhost:5173!
```

setting up https for your pwa can be install.

```bash
# 1. install mkcert, if not using brew see https://github.com/FiloSottile/mkcert
brew install mkcert
brew install nss
mkcert -install

# 2. generate key and cert for localhost
mkcert -key-file key.pem -cert-file cert.pem localhost

# 3. run you app
pnpm run dev
```

## built using

- React
- Vite
- Vitest
- TanStack Router
- pnpm
- TailwindCSS
- Playwright

## commands

| Command        | Usage                                                       |
| -------------- | ----------------------------------------------------------- |
| dev            | Run your app!                                               |
| build          | Build your app!                                             |
| fmt            | Check the formatting of your app with prettier.             |
| fmt:fix        | Format files in your app with prettier.                     |
| e2e            | End to end testing using Playwright.                        |
| test           | Unit testing using Vitest.                                  |
| test:coverage  | Get a coverage report of your unit test with Vitest.        |
| lint           | Lint your project using Eslint                              |
| lint:fix       | Fix any linting issues automatically with Eslint.           |
| bundle:analyse | Create a graphical representation of the bundle with sizes. |
