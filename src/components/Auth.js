import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../redux/authReducer'
import {connect} from 'react-redux'

const Auth = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        axios.post('/auth/register', {username, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {username, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className = "main_background level_background">
            <h1> Auth Page </h1>
            <input value = {username} onChange = {(e) => setUsername(e.target.value)}/>
            <input value = {password} onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick = {handleLogin}> Login </button>
            <button onClick = {handleRegister}> Register </button>
        </div>
    )
}

export default connect(null, {setUser}) (Auth)