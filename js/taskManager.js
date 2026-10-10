// Aquest mòdul conté la lògica de les tasques.
// No utilitza document ni localStorage, de manera que es pot
// importar i provar sense dependre del navegador.

// Crea una tasca amb el text sense espais als extrems.
// Inicialment, la tasca queda pendent.
export function createTask(text) {
    return {
        id: Date.now(),
        text: text.trim(),
        completed: false
        // completed: true // Error deliberat per comprovar la CI.
    };
}

// Comprova que el valor sigui una cadena amb contingut.
// Una cadena buida o formada només per espais no és vàlida.
export function isValidTask(text) {
    return typeof text === "string" && text.trim().length > 0;
}

// Selecciona les tasques segons el filtre indicat.
export function filterTasks(tasks, filter) {
    switch (filter) {
        case "pending":
            return tasks.filter(task => !task.completed);

        case "completed":
            return tasks.filter(task => task.completed);

        case "all":
        default:
            return tasks;
    }
}

// Calcula quantes tasques hi ha en total,
// quantes estan completades i quantes queden pendents.
export function getTaskStats(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    return { total, pending, completed };
}