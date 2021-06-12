import {Link} from 'react-router-dom'
import {setKey} from '../redux/keyReducer'
import {connect} from 'react-redux'

const Key = (props) => {
    const handleKey = () => {
        props.setKey(true)
        props.history.push('/NoKey')
    }
    console.log(props)
    return (
        <div className =  "key level_background">
            <Link to='/Level1Right'> <div className = "room_changer_left"> </div> </Link>
            <button onClick={handleKey}>  <div className = "switch_to_no_key"> </div> </button> 
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return stateRedux.grabbedKey
}

export default connect(mapStateToProps, {setKey})(Key)