import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }
    catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(401).json("user not found")

        const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return res.status(400).json("Wrong Credentials")

        res.status(200).json(user)
    }
    catch (err) {
        next(err)
    }
}