export const getTodos = async () => {
    const res = await fetch(process.env.SERVER_URL);
    const todos = res.json();
    return todos;
}