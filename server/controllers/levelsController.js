module.exports = {
    getLevels: (req, res) => {
        const db = req.app.get('db')
        db.levels.get_levels()
        .then((levels) => {
            res.status(200).send(levels)
        })
        .catch(err => console.log(err))
    },

    updateLevels: (req, res) => {
        const db = req.app.get('db')
        db.levels.update_levels()
        .then((levels) => {
            res.status(200).send(levels)
        })
        .catch(err => console.log(err))
    },

    updateLevel: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.levels.update_level(id)
        .then((levels) => {
            res.status(200).send(levels)
        })
        .catch(err => console.log(err))
    }
}