"use client";

import { Todo } from "@/types/todo-type";
import { FormEvent, useState } from "react";
import { IoTrash } from "react-icons/io5";

export default function Home() {
  const [todoValue, setTodoValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEmpty, setisEmpty] = useState<boolean>(false);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoValue.trim()) {
      setisEmpty(true);
      setTimeout(() => {
        setisEmpty(false);
      }, 2000);
      return;
    }
    const newTodo: Todo = {
      id: todos.length + 1,
      text: todoValue,
    };
    setTodos([newTodo, ...todos]);
    setTodoValue("");
  };
  const removeTodo = (id: number) => {
    const removedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removedTodo);
  };

  return (
    <div className="h-[100vh] w-full flex flex-col gap-[2rem] justify-center items-center">
      <div className="todo-title-wrapper">
        <h1 className="text-[2rem] font-bold">Next.js Todo App</h1>
      </div>
      {isEmpty && (
        <div className="bg-[#ff0000] py-2 px-4 text-center rounded-[4px]">
          <span className="text-[#fff] text-[1rem]">Todo boş olamaz!</span>
        </div>
      )}
      <form onSubmit={(e) => addTodo(e)} className="flex">
        <input
          className="border border-[#333] py-2 px-2 rounded-l-[4px] focus:outline-none"
          type="text"
          placeholder="Todo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="bg-[#333] py-[9px] px-4 rounded-r-[4px] text-[#fff] cursor-pointer">
          Add
        </button>
      </form>
      <div className="w-[265px] flex flex-col gap-[1rem]">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-[#fff] rounded-[4px] shadow-xl py-3 px-2"
          >
            <span className="text-[#000] capitalize">{todo.text}</span>
            <div className="flex">
              <button
                onClick={() => removeTodo(todo.id)}
                className="cursor-pointer"
              >
                <IoTrash size={18} color="#000" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
