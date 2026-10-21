# Instruccions de Desenvolupament per a DevTasks

1. Arquitectura de Mòduls i Desacoblament:
   - Tota la lògica de negoci (càlculs, validacions, filtratges) ha d'anar
     ÚNICAMENT a `js/taskManager.js` utilitzant ES6 Modules (`export`).
   - Les funcions de `taskManager.js` han de ser pures (sense referències a
     `document`, `window` o `localStorage`).
   - La manipulació del DOM, esdeveniments d'interfície i persistència
     corresponen exclusivament a `js/app.js`.

2. Tests Unitaris Amb Vitest:
   - Per a qualsevol nova funció o modificació realitzada a `taskManager.js`,
     crea obligatòriament les seves proves unitàries a `tests/app.test.js` fent
     servir Vitest (`describe`, `it`, `expect`).

3. Estil i Qualitat de Codi:
   - Utilitza JavaScript modern (ES6+), funcions clares, noms de variables
     descriptius i evita l'ús de variables globals no desitjades.
