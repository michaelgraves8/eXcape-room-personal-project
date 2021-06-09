import {Link} from 'react-router-dom'

const Level1Main = () => {
    return (
        <div className =  "L1M level_background">
            <Link to = '/Level1Left'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/Level1Right'> <div className = "room_changer_right"> </div> </Link>
            <Link to = '/Success'> <div className = "switch_to_success"> </div> </Link>
        </div>
    )
}

export default Level1Main