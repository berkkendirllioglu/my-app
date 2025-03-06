import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex w-full py-4 px-20 justify-around items-center bg-[#333]'>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/"}>Home</Link>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/todos"}>Todos</Link>
      <Link className='text-[#fff] transition hover:text-[#999999]' href={"/todos/4"}>Single Todo</Link>
    </nav>
  )
}
