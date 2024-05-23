export const getBusqueda = async (id) => {
    try {
        const response = await fetch(`https://search.imdbot.workers.dev/?q=${id}`);
        let result = await response.json();
        result=result.description
        return result
    } catch (error) {
        console.error(error)
    }
}