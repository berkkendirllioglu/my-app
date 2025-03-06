import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex w-full py-4 px-20 justify-around items-center bg-[#333]'>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/"}>Home</Link>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/todos"}>Todos</Link>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/instruments"}>Instruments</Link>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/todos/4"}>Single Todo</Link>
      <Link className='bg-[#3576c0] text-[#fff] px-4 py-2 rounded-lg' href={"/new-todo/"}>Add Todo</Link>
    </nav>
  )
}
