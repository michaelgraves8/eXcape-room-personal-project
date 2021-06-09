const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const foundUser = await db.auth.check_user_exists(username)
        
        if(foundUser[0]) {
            return res.status(409).send(`Username already in use`)
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.auth.register_user(username, hash)
        delete newUser[0].pass

        req.session.user = newUser[0]
        return res.status(200).send(req.session.user)

    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log({username, password})
        const foundUser = await db.auth.check_user_exists(username)

        if(!foundUser[0]) {
            return res.status(401).send(`Incorrect username or password`)
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].pass)

        if(authenticated) {
            delete foundUser[0].pass
            req.session.user = foundUser[0]
            return res.status(200).send(req.session.user)
        }
            return res.status(401).send(`Incorrect username or password`)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}