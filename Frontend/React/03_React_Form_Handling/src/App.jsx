import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    let {name, value} = e.target;
    // let {name, value, placeholder, type} = e.target; -> destructure input attributes
    
    setFormData({...formData, [name]: value})
  }

  return (
    <div className='flex flex-col gap-5 px-2 py-1' >
       <input 
       name='name'
       type="text" 
       placeholder='name' 
       className='border px-5 py-1 w-50'
       onChange={handleChange}/>

       <h1>This is - {}</h1>

       <input 
       name='email'
       type="email" 
       placeholder='email' 
       className='border px-5 py-1 w-50'
       onChange={handleChange}
       />

       <input 
       name='password'
       type="password" 
       placeholder='password' 
       className='border px-5 py-1 w-50'
       onChange={handleChange}
       />

       <h1>Name is - {formData.name}</h1>
       <h1>Email is - {formData.email}</h1>
       <h1>Password is - {formData.password}</h1>
    </div>
  )
}

export default App
