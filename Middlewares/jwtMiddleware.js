
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res,next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        console.log('inside jwt');
        if (token) {
            const jwtResponse = jwt.verify(token,"secret")
            req.payload = jwtResponse.userId
            console.log('hello');
            next()
        } else {
            res.status(406).json("Token is not available...")
        }
    } catch (error) {
        res.status(401).json("please login")

    }
}

module.exports = jwtMiddleware
