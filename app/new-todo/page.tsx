'use client'
import { PostFetchAPI } from '@/services/FetchProcess';
import { PostTodoPayload, PostTodoResult, TodoPayload } from '@/types/post-todo-type';
import React, { FormEvent, useState } from 'react'



export default function page() {
    const [newTodo, setnewTodo] = useState<PostTodoResult>();

    const addNewTodo = async (e:FormEvent) => {
        e.preventDefault();
        const formEl = e.target as HTMLFormElement;
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData) as unknown as TodoPayload;
        const modifyData:PostTodoPayload = {
            title:data.title,
            body:data.body,
            userId:1,
        }
        const response = await PostFetchAPI("/posts/",modifyData);
        setnewTodo(response);
    }

  return (
    <div className='h-[100vh] w-full flex flex-col gap-[1rem] justify-center items-center'>
      <form onSubmit={(e) => addNewTodo(e)} className='flex flex-col gap-[1rem]'>
        <input className='border border-[#333] py-2 px-2 rounded-lg' name='title' type="text" placeholder='Title..' />
        <input className='border border-[#333] py-2 px-2 rounded-lg' type="text" name='body' placeholder='Text..' />
        <button className='bg-[#333] text-[#fff] py-2 cursor-pointer rounded-lg'>Oluştur</button>
      </form>

      <div className='text-[#333] flex flex-col gap-[1rem]'>
        <h2 className='text-[2rem] font-bold'>Todo</h2>
        <p>{newTodo?.id}</p>
        <p>{newTodo?.userId}</p>
        <p>{newTodo?.title}</p>
        <p>{newTodo?.body}</p>
      </div>
    </div>
  )
}
