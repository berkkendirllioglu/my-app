import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

const FetchAPI = async (url:string) => {
    try {
        const response = await axios.get(`${BASE_URL + url}`)
        return response.data;

    } catch (error) {
        console.error(error);
    }
};

const getSingleTodo = async (params:string) => {
    return FetchAPI(`/todos/${params}`);
}

const getTodos = async () => {
    return FetchAPI("/todos");
}

export {FetchAPI, getTodos, getSingleTodo};