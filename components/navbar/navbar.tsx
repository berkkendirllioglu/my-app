import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex w-full py-2 px-20 justify-around items-center bg-[#333]'>
      <Link className='text-[#fff]' href={"/"}>Home</Link>
      <Link className='text-[#fff]' href={"/todos"}>Todos</Link>
      <Link className='text-[#fff]' href={"/todos/1"}>Single Todo</Link>
    </nav>
  )
}
