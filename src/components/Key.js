import {Link} from 'react-router-dom'

const Key = () => {
    return (
        <div className =  "key level_background">
            <Link to = '/Level1Right'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/NoKey'> <div className = "switch_to_no_key"> </div> </Link>
        </div>
    )
}

export default Key