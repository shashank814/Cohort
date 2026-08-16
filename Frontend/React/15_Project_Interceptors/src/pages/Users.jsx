import React, { useEffect, useState } from 'react'
import axios from "axios"
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosInstance'

const Users = () => {

    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let getUserData = async() => {
        try {
            let res = await axiosInstance.get("/users") || []
            console.log(res);
            setUserData(res.data.data || res.data)
            setIsLoading(false)
        } catch (error) {
            console.log("error in users api", error);
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    if(isLoading) return <h1 className='text-4xl text-red-900'>Loading Users...</h1>

  return (
    <div className='grid grid-cols-4 gap-5'>
     {userData.map((val) => (
         <UserCard key={val.id} user={val} />
     ))}
    </div>
  )
}

export default Users
