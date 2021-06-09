import {Link} from 'react-router-dom'

const LeverOff = () => {
    return (
        <div className = "lever_off level_background">
            <Link to = '/Level1Left'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/LeverOn'> <div className = "turn_lever_on"> </div> </Link>
        </div>
    )
}

export default LeverOff