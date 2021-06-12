import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const Chest = (props) => {
    // console.log(props)
    return (
        <div className =  "closed_chest level_background">
            <Link to = '/Level1Right'> <div className = "room_changer_left"> </div> </Link>
            {props.lever ? (
                <Link to = '/Key'> <div className = "switch_to_drawer"> </div> </Link>
            ) : null}
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return stateRedux.lever
}

export default connect(mapStateToProps)(Chest)