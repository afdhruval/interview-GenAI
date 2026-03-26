import { useContext } from "react";
import { authContext } from "../auth.context";
import { loginUser, registerUser, logout, getme } from "../services/auth.api"

export const useAuth = () => {

    const context = useContext(authContext)

    const { user, setuser, loading, setloading } = context

    const handleLogin = async ({ email, password }) => {
        setloading(true)
        const data = await loginUser({ email, password })
        setuser(data.user)
        setloading(false)
    }

    const handleRegister = async ({ email, username, password }) => {
        setloading(true)
        const data = await registerUser({ email, username, password })
        setuser(data.user)
        setloading(false)
    }

    const handleLogout = async () => {
        setloading(true)
        const data = await logout()
        setuser(null)
        setloading(false)
    }

    return {
        user, loading, handleRegister, handleLogin, handleLogout
    }

}