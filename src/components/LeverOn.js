import {Link} from 'react-router-dom'
import {useEffect} from 'react'


const LeverOn = () => {
    useEffect(() => {
    }, [])
    return (
        <div className = "lever_on level_background">
            <Link to = '/Level1Left'> <div className = "room_changer_left"> </div> </Link>
        </div>
    )
}

export default LeverOn