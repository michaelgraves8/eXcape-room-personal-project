module.exports = {
    getLevels: (req, res) => {
        const db = req.app.get('db')
        const {username} = req.params
        console.log({testUsername: username})
        db.levels.get_levels(username)
        .then((levels) => {
            res.status(200).send(levels)
        })
        .catch(err => console.log(err))
    },
    
    updateLevel: (req, res) => {
        const db = req.app.get('db')
        const {levelId, username} = req.params
        console.log({testUsername: username})
        db.levels.update_level(levelId, username)
        .then((levels) => {
            console.log({updateres: res})
            res.status(200).send(levels)
        })
        .catch(err => console.log(err))
    }
}