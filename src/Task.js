export const newTask = (name, dueDate, priority) => {
    let complete = true;
    return {
        name,
        dueDate,
        priority,
        complete
    }
}