import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const LevelSelect = () => {
    const [levels, setLevels] = useState([])

    useEffect(() => {
        axios.get('/api/levels')
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
                    console.log(level)
                    // console.log(level)
                    return (
                        <div key={level.levelsid}>
                            <Link to={level.link} className="link_normalizer_level"> <h1> {level.levelname} </h1> </Link>
                            <p> {level.levelstatus} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LevelSelect