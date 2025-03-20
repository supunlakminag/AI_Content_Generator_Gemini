import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 bg-white shadow-sm border-b-3 flex justify-between items-center'>
      <div className='flex gap-3 items-center p-2 border rounded-md max-w-lg bg-white '>
        <Search/>
        <input type='text' placeholder='Search Here...' className='outline-none'/>
      </div>
      <div className='flex gap-5 items-center' >
        <h2 className='bg-red-600 p-1 rounded-full text-xs text-white px-2  '> 🔥 Join now to the premium only 12.99/month </h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
