import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({setUsers, setToggle}) => {

    let {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: {
            
        }
    });

    console.log("error", errors);
    
    let formSubmit = (data) => {
        console.log(data);
        setUsers((prev) => [...prev, data])
        reset()
        setToggle((prev) => !prev)
    } 

  return (
    <div className='flex flex-col gap-3 items-center'>
       <h1 className='font-bold text-xl text-white'>Create User</h1>

       <form 
       onSubmit={handleSubmit(formSubmit)}
       className='w-90 bg-black text-white flex flex-col gap-3 p-4 rounded border-2 border-white'>

          <input 
          {...register("name", {
            required: "Name is required",
            pattern: {
                value: /^\S.*$/,
                message: "Blank spaces are not allowed"
            },
          })}
          className='p-2 rounded outline-0 border border-white' type="text" placeholder='Name'/>
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

          <input 
          {...register("email", {
            required: "Email is required",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter valid email"
            }
          })}
          className='p-2 rounded outline-0 border border-white' type="email" placeholder='Email'/>
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

          {/* <input 
          {...register("password", {
            required: "Password is required",
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Please enter strong password"
            }
          })}
          className='p-2 rounded outline-0 border border-white' type="password" placeholder='Password'/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>} */}

          <input 
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
                value: 10,
                message: "Minimum 10 digits are required",
            },
            maxLength: {
                value: 10,
                message: "Maximum 10 digits are required"
            }
          })}
          className='p-2 rounded outline-0 border border-white' type="tel" placeholder='Mobile'/>
          {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}

          <input 
          {...register("image", {
            required: "Image is required"
          })}
          className='p-2 rounded outline-0 border border-white' type="url" placeholder='Image'/>
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
          
          <button className='text-white bg-blue-700 p-4 rounded-xl cursor-pointer'>Add User</button>

       </form>
    </div>
  )
}

export default Form
