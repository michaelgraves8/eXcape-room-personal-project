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
            props.history.push('/LevelSelect')
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {username, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
            props.history.push('/LevelSelect')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className = "main_background level_background">
            <div className="box">
                <div className="center auth">
                    <h4> Create an account or Sign Up! </h4>
                    <input placeholder="Username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                    <input placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                    <div>                        
                    <button onClick = {handleLogin}> Login </button>
                    <button onClick = {handleRegister}> Register </button>
                    </div>
                </div>
            </div>           
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return stateRedux.auth
}


export default connect(mapStateToProps, {setUser}) (Auth)