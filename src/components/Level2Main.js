import {Link} from 'react-router-dom'

const Level2Main = () => {
    return (
        <div className =  "L2M level_background">
            <Link to = '/Level2Left'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/Level2Right'> <div className = "room_changer_right"> </div> </Link>
        </div>
    )
}

export default Level2Main