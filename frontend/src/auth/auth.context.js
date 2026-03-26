import { createContext, useState } from "react";

export const authContext = createContext()

export const authProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(false)


    return (
        <authContext.Provider value={{ user, setuser, setloading, loading }}>
            {children}
        </authContext.Provider>
    )

}