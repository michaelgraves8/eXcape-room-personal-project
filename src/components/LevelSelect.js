import {Link} from 'react-router-dom'

const LevelSelect = () => {
    return (
        <div className = "main_background level_background level_select">
            <Link to = '/Level1Main'> <img src = "./Level1Main" alt = "Level 1"/> </Link>
            <Link to = '/Level2Main'> <img src = "./Level1Main" alt = "Level 2"/> </Link>
        </div>
    )
}

export default LevelSelect