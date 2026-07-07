import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'

const App = () => {

  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])

  return (
    <div className='flex justify-center'>
       {toggle ? (users.map((elem) => <UserCard users={elem} />)) : <Register setUsers={setUsers} setToggle={setToggle}/>}
       {/* {toggle ? <Login setToggle={setToggle}/> : <Register setUsers={setUsers} setToggle={setToggle}/>} */}
    </div>
  )
}

export default App
