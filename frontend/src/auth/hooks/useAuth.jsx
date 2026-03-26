import { useContext } from "react";
// import { AuthProvider } from "../auth.context";
import { authContext } from "../auth.context.jsx";
import { loginUser, registerUser, logout, } from "../services/auth.api"

export const useAuth = () => {

    const context = useContext(authContext)

    const { user, setuser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await loginUser({ email, password })
            setuser(data.user)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ email, username, password }) => {
        setLoading(true)
        try {
            const data = await registerUser({ email, username, password })
            setuser(data.user)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setuser(null)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    return {
        user, loading, handleRegister, handleLogin, handleLogout
    }

}