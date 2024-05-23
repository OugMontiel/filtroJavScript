export const getBusqueda = async (id) => {
    const response = await fetch(`https://search.imdbot.workers.dev/?q=${id}`);
    const result = await response.json();
    return result
}