import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='p-4 flex flex-col gap-4 border-gray-400 rounded bg-white'>
       <div className='w-50 h-60 rounded overflow-hidden'>
        <img className='h-full w-full' src="" alt="" />
       </div>

       <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
       </div>
       <button>Delete</button>
    </div>
  )
}

export default UserCard
