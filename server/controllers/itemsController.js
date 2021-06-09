module.exports = {
    getItems: (req, res) => {
        const db = req.app.get('db')
        db.inventory.get_items()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch(err => console.log(err))
    },

    getInventory: (req, res) =>{
        const db = req.app.get('db')
        db.inventory.get_inventory()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch(err => console.log(err))
    },

    addItem: (req, res) => {
        const db = req.app.get('db')

    },

    deleteItem: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.inventory.delete_item(id)
        .then((items) => {
            res.status(200).send(items)
        })
        .catch(err => console.log(err))
    }
}