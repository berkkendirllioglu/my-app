import { PostTodoPayload, PostTodoResult } from "@/types/post-todo-type";
import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

const GetFetchAPI = async (url:string) => {
    try {
        const response = await axios.get(`${BASE_URL + url}`)
        return response.data;

    } catch (error) {
        console.error(error);
    }
};
const PostFetchAPI = async (url:string, data:PostTodoPayload) => {
    try {
        const response = await fetch(`${BASE_URL + url}`, {
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        });
        const responseJson = await response.json() as PostTodoResult;

        return responseJson
    } catch (error) {
        console.error(error)
    }
}

const getSingleTodo = async (params:string) => {
    return GetFetchAPI(`/todos/${params}`);
}

const getTodos = async () => {
    return GetFetchAPI("/todos");
}

export {GetFetchAPI, getTodos, getSingleTodo, PostFetchAPI};