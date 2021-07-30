import {Link} from 'react-router-dom'
import Inventory from './Inventory';

const Level1Left = () => {
    
    return (
            <div className =  "L1L level_background">
                <Link to = '/Level1Main'> <div className = "room_changer_right"> </div> </Link>
                <button>  <Link to = '/LeverOff'> <div className = "switch_to_lever">  </div> </Link> </button>

                <Inventory />
            </div>
    )
}

export default Level1Left