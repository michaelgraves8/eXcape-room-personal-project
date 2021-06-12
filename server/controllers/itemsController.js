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
        db.inventory.add_item()
        // .then((items) => {
        //     res.status(200).send(items)
        // })
        // .catch(err => console.log(err))

    },

    deleteItem: (req, res) => {
        // const {id} = req.params
        const db = req.app.get('db')
        db.inventory.delete_item()
        .then(() => {
            res.status(200).send()
        })
        .catch(err => console.log(err))
    },

    getKey: (req, res) => {
        const db = req.app.get('db')
        db.inventory.get_key()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch(err => console.log(err))
    },

    addKey: (req, res) => {
        const db = req.app.get('db')
        db.inventory.add_key()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch(err => console.log(err))
    },

    deleteKey: (req, res) => {
        const db = req.app.get('db')
        db.inventory.delete_key()
    }
}