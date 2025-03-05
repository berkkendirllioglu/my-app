import { getSingleTodo } from '@/services/FetchProcess'
import { JSONTodo } from '@/types/todo-type';
import React from 'react'

export interface ParamsType {
  params:Promise<{todo:string}>
}

export default async function page({params}:ParamsType) {
    const {todo} = await params;
    const singleTodo:JSONTodo = await getSingleTodo(todo)
  return (
    <div className='flex flex-col'>
      <span>UserID: {singleTodo.userId}</span>
      <span>ID: {singleTodo.id}</span>
      <span>Title: {singleTodo.title}</span>
      <span>Current: {singleTodo.completed ? "Tamamlandı":"Tamamlanmadı"}</span>
    </div>
  )
}
