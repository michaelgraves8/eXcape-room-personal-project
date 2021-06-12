import axios from 'axios'
import { useEffect, useState } from 'react'

const Inventory = () => {
    const [inventory, setInventory] = useState([])

    useEffect(() => {

    axios.get('/api/inventory')
    .then((res) => {
        setInventory(res.data)
    })
    .catch(err => console.log(err))
}, [])

    return (
        <div className =  "inventory">
            <h2> Inventory </h2>
            <div className="items">
                {inventory.map((item) => {
                    console.log(item)
                    return (
                        <div key={item.inventoryid}>
                            <h1> {item.item} </h1>
                            <p> {item.describe} </p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Inventory