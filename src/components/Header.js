import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to = '/'> Home Page </Link>
            <Link to = '/Auth'> Login/Register </Link>
            <Link to = 'LevelSelect'> Select Level </Link>
            <Link to = '/LeaderBoard'> Leaderboards </Link>
        </header>
    )
}

export default Header