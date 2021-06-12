import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios'

const NoKey = () => {
    useEffect(() => {

    axios.post('/api/item')
    .then((res) => {
    })
    .catch(err => console.log(err))
}, [])

    return (
        <div className =  "no_key level_background">
            <Link to = '/Level1Right'> <div className = "room_changer_left"> </div> </Link>
        </div>
    )
}

export default NoKey