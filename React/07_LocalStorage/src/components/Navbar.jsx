import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 rounded flex items-center bg-black text-white justify-between'>
       <div className='flex gap-2'>
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" className='h-10 w-10 rounded-full'/>
       </div>
       <div className='flex gap-6 font-semibold'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
       </div>
       <button onClick={() => setToggle((prev) => !prev)} className='p-2 bg-blue-700 text-white cursor-pointer rounded'>Create User</button>
    </div>
  )
}

export default Navbar
