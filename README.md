# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

##

# Semantic-Release Configuration

First, you need to install semantic-release and the plugins you intend to use based on your configuration.

```bash
npm i -D semantic-release @semantic-release/{git,commit-analyzer,release-notes-generator,npm,changelog}
```

Next, follow the documentation here to configure semantic-release according to your needs. My personal configuration looks as follows:

```json
// package.json

"release": {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    // If you don't want to publish on the npm registry, you can set npmPublish to false, i have set it on true
    [
      "@semantic-release/npm",
        {
          "npmPublish":true
        }
    ],
    "@semantic-release/changelog",
    "@semantic-release/git"
],
"branch": "master"
}
```

You should now be able to automatically create a release by running npx semantic-release from your Continuous Integration (CI) system.

## With GitHub

Create your workflow file inside .github forlder in the project root like:

```
.github
└── workflows
└── release.yml
```

```yml
#release.yml

name: Release
"on":
  push:
    branches:
      - master
permissions:
  contents: read # for checkout
jobs:
  release:
    permissions:
      contents: write # to be able to publish a GitHub release
      issues: write # to be able to comment on released issues
      pull-requests: write # to be able to comment on released pull requests
      id-token: write # to enable use of OIDC for npm provenance
    name: release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@0ad4b8fadaa221de15dcec353f45205ec38ea70b # v4.1.4
      - uses: actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8 # v4.0.2
        with:
          cache: npm
          node-version: lts/*
      - run: npm clean-install
      - run: corepack npm audit signatures
      # pinned version updated automatically by Renovate.
      # details at https://semantic-release.gitbook.io/semantic-release/usage/installation#global-installation
      - run: npx semantic-release@21.0.2
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Now you need to recover the `GITHUB TOKEN` and the `NPM TOKEN`.
Once obtained you would create the secrets inside the github repository settings
calling them respectively `GH_TOKEN` and `NPM_TOKEN` like in the file .yml.

[workflow ref]('https://github.com/semantic-release/semantic-release/blob/master/.github/workflows/release.yml')

##

# Analisi del workflow

###  Name

- Il nome del workflow è "Release". Questo nome verrà visualizzato nell'interfaccia utente di GitHub Actions.

###  On

- Questo workflow è attivato su eventi di push sulle seguenti branche: master, next, beta, e tutte le branche che terminano con .x.

###  Permissions

- Questo blocco specifica le autorizzazioni necessarie per eseguire il workflow. In questo caso, il workflow richiede il permesso di leggere il contenuto (per il checkout) e il permesso di scrivere il contenuto (per pubblicare un rilascio GitHub), scrivere sugli issue (per commentare sugli issue rilasciati) e scrivere sulle pull request (per commentare sulle pull request rilasciate).

###  Jobs

- Il workflow contiene un singolo job chiamato "release". Questo job viene eseguito su una macchina virtuale Ubuntu più recente.

###  Permissions

- Il job ha le stesse autorizzazioni specificate nel blocco globale di autorizzazioni. Questo blocco specifica ulteriormente le autorizzazioni necessarie per eseguire il job, inclusi i permessi per scrivere il contenuto, gli issue, le pull request e l'id token.

###  Steps

- **Checkout**: Utilizza l'azione actions/checkout@0ad4b8fadaa221de15dcec353f45205ec38ea70b per effettuare il checkout del codice sorgente nel job. La versione specificata di questa azione è v4.1.4.
- **Setup Node.js**: Utilizza l'azione actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8 per impostare l'ambiente Node.js. Utilizza la versione LTS più recente di Node.js e cache npm per ottimizzare le successive esecuzioni del workflow. La versione specificata di questa azione è v4.0.2.
- **npm clean-install**: Esegue il comando npm clean-install per installare le dipendenze del progetto senza l'uso della cache npm.
- **corepack npm audit signatures**: Esegue il comando corepack npm audit signatures. Questo passaggio sembra coinvolgere la gestione delle firme nell'audit di sicurezza npm.
- **npx semantic-release**: Esegue il comando npx semantic-release@21.0.2 per avviare semantic-release per la creazione di un rilascio. Utilizza il token GitHub e il token npm specificati nelle variabili segrete (GITHUB_TOKEN e SEMANTIC_RELEASE_BOT_NPM_TOKEN).
