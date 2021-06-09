import {Link} from 'react-router-dom'

const Level1Right = () => {
    return (
        <div className =  "L1R level_background">
            <Link to = '/Level1Main'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/Chest'> <div className = "switch_to_chest">  </div> </Link>
        </div>
    )
}

export default Level1Right