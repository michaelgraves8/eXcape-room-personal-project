import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {useEffect, useState} from 'react'
import axios from 'axios'
import Inventory from './Inventory';



const Level1Main = (props) => {

    const handleSuccess = () => {
        axios.delete('/api/item')
        props.history.push('/Success')

    }

    return (
        <div className="L1M level_background">
            <Link to='/Level1Left'> <div className = "room_changer_left"> </div> </Link>
            <Link to='/Level1Right'> <div className = "room_changer_right"> </div> </Link>
            {props.grabbedKey ? (
                <button onClick={handleSuccess}>  <div className = "switch_to_success"> </div> </button>
            ) : null}

        <Inventory />
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return stateRedux.grabbedKey
}

export default connect(mapStateToProps)(Level1Main)