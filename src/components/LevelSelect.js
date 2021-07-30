import {Link} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from "../context/AuthContext";


const LevelSelect = (props) => {
    const [levels, setLevels] = useState([])
    const {username} = useContext(AuthContext)
    
    useEffect(() => {
            username || props.history.push('/Auth')
        }, [])
        
    useEffect(() => {
        console.log({username, useEffect: "Called"})
        axios.get(`/api/levels/${username}`)
        .then((res) => {

            setLevels(res.data)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        <div className = "main_background level_background level_select">
            <div className="level_select_box">
                <h1> Select a level </h1>
                {levels.map((level) => {
                    return (
                        <div key={level.levelsid}>
                            <Link to={level.link} className="link_normalizer_level"> <h1> {level.levelname} </h1> </Link>
                            <p> {level.levelstatus || 'Incomplete'} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LevelSelect