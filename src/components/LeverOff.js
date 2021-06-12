import {Link} from 'react-router-dom'
import {setLever} from '../redux/leverReducer'
import {connect} from 'react-redux'

const LeverOff = (props) => {
    const handleLever = () => {
        props.setLever(true)
        props.history.push('/LeverOn')
    }
    console.log(props)
    return (
        <div className="lever_off level_background">
            <Link to = '/Level1Left'> <div className = "room_changer_left"> </div> </Link>
            <button onClick={handleLever}> <div className = "turn_lever_on"> </div> </button>
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return stateRedux.lever
} 

export default connect(mapStateToProps, {setLever})(LeverOff)