# DevTasksSana

## Descripció

DevTasks és una aplicació web per gestionar tasques, feta amb HTML, CSS i JavaScript.

Permet crear, completar i eliminar tasques, filtrar-les per estat i consultar quantes n'hi ha de pendents i de completades. Les tasques es guarden al navegador amb localStorage i es mantenen quan es recarrega la pàgina.

## Instal·lació

Cal tenir Node.js i npm instal·lats. Des de la carpeta del projecte, executa:

```bash
npm install
```

Si PowerShell bloqueja npm.ps1, pots executar la mateixa ordre amb:

```powershell
npm.cmd install
```

## Tests

Per executar els tests:

```bash
npm test
```

A PowerShell, si npm.ps1 està bloquejat:

```powershell
npm.cmd test
```

Hi ha 12 tests amb Vitest que comproven aquestes funcions:

- `isValidTask`: valida el text d'una tasca.
- `createTask`: crea una tasca pendent i elimina els espais del principi i del final del text.
- `filterTasks`: filtra les tasques segons el seu estat.
- `getTaskStats`: calcula el total de tasques, les pendents i les completades.

## GitHub Actions

El projecte té dos workflows a `.github/workflows/`:

- **`ci.yml` — Continuous Integration (CI):** s'executa en les Pull Requests dirigides a `main`. Prepara Node.js 20, instal·la les dependències amb `npm ci` i executa els tests amb `npm test`.
- **`deploy.yml` — Deploy Web App to GitHub Pages:** s'executa quan arriba un canvi a `main`. Prepara els fitxers de la web i els publica a GitHub Pages.

## Pull Requests

Per fer un canvi, es crea una branca de treball. Després es modifiquen els fitxers, es fa commit i push i s'obre una Pull Request cap a `main`.

Abans del merge, es revisen els canvis i el resultat de la CI. La branca `main` està protegida: requereix una Pull Request i que la comprovació **Install Dependencies and Run Tests** passi.

Durant la pràctica hem provocat un error expressament per comprovar que la CI el detectava. Després de corregir-lo i pujar el canvi, els tests han tornat a passar.

## Deploy

La web publicada es pot consultar aquí:

[Obrir DevTasksSana a GitHub Pages](https://ssabir94.github.io/DevTasksSana/)

Quan es fa merge d'una PR a `main`, el workflow de desplegament s'executa automàticament i publica els canvis.

## Dependències

Les dependències npm es declaren a `package.json`. El fitxer `package-lock.json` registra les versions concretes perquè es puguin tornar a instal·lar.

Dependabot està configurat a `.github/dependabot.yml` per comprovar setmanalment les dependències npm i les accions dels workflows.

Quan troba actualitzacions, proposa els canvis mitjançant Pull Requests. Durant la pràctica hem revisat les PR generades i els resultats de la CI. De moment, aquestes PR continuen obertes i les actualitzacions no s'han integrat a `main`.

## Arquitectura

El codi està separat en tres parts:

- **`js/app.js`:** gestiona els elements HTML, els esdeveniments, la visualització de les tasques i el desament amb localStorage.
- **`js/taskManager.js`:** conté les funcions de validació, creació, filtratge i estadístiques. Aquestes funcions són independents del DOM.
- **`tests/app.test.js`:** conté els tests de les funcions de `taskManager.js`, escrits amb Vitest.

Així podem provar les funcions de gestió de tasques sense haver de carregar la pàgina.