import axios from "axios"
import { useAuth } from "../context/AuthContext"

const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true
})

const useApi = () => {

    const { accessToken } = useAuth()

    api.interceptors.request.use(
        (request) => {
            if(accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`
            }
            return request
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return api
}

export default useApi