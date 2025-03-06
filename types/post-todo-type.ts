export interface TodoPayload {
    title:string,
    body:string,
}

export interface PostTodoPayload {
    title:string,
    body:string,
    userId:number,
}

export interface PostTodoResult {
    title:string,
    body:string,
    userId:number,
    id:number,
}