import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <AuthContext.Provider
        value={{
            username,
            setUsername,
            password,
            setPassword
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}