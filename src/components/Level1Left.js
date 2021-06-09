import {Link} from 'react-router-dom'

const Level1Left = () => {
    return (
        <div className =  "L1L level_background">
            <Link to = '/Level1Main'> <div className = "room_changer_right"> </div> </Link>
            <Link to = '/WaterMeter'> <div className = "switch_to_water-meter">  </div> </Link>
        </div>
    )
}

export default Level1Left