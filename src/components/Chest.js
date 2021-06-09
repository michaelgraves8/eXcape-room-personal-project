import {Link} from 'react-router-dom'


const Chest = () => {
    return (
        <div className =  "closed_chest level_background">
            <Link to = '/Level1Right'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/Key'> <div className = "switch_to_drawer"> </div> </Link>
        </div>
    )
}

export default Chest