import { getTodos } from '@/services/FetchProcess'
import { JSONTodo } from '@/types/todo-type';
import React from 'react'

export default async function page() {
    const todos:JSONTodo[] = await getTodos();
  return (
    <div className='flex flex-col gap-[1rem]'>
        {todos.map((todo) => (
            <div key={todo.id} className='flex flex-col'>
                <span>UserID: {todo.userId}</span>
                <span>ID: {todo.id}</span>
                <span>Title: {todo.title}</span>
                <span>Current: {todo.completed ? "Tamamlandı":"Tamamlanmadı"}</span>
            </div>
        ))}
    </div>
  )
}
