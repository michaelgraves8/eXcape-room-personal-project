import {Link} from 'react-router-dom'
import Modal from "react-modal"
import {useState, useEffect} from 'react'


const Level2Main = () => {

    const [modal, setModal] = useState(false)

    useEffect(() => {
        setModal(true)
      }, []);

      const closeModal = () => {
          setModal(false)
      }

    return (
        <div className =  "L2M level_background">
            <Link to = '/Level2Left'> <div className = "room_changer_left"> </div> </Link>
            <Link to = '/Level2Right'> <div className = "room_changer_right"> </div> </Link>
            <Modal isOpen={modal}>
                <h1> Level in progress!! </h1>
                <p>  This level is currently being worked on, be aware that you may not be able to complete level at this time.</p>
                <button onClick={closeModal}> X </button>
            </Modal>
        </div>
    )
}

export default Level2Main