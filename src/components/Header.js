import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h2 className="logo"> Xcape Factory </h2>
            <div className="header_links">
            <Link to = '/' className="link_normalizer"> Home Page </Link>
            <Link to = '/Auth' className="link_normalizer"> Login/Register </Link>
            <Link to = 'LevelSelect' className="link_normalizer"> Select Level </Link>
            </div>
        </header>
    )
}

export default Header