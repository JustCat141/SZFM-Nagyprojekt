import * as userService from '../Services/UserService.js'
import * as userHelper from '../Helpers/UserHelper.js'
import * as rh from '../Helpers/ResponseHelper.js'

export const getUsers = async (req, res) => {
    const users = await userService.getUsers()
    res.status(200).send(users)
}

export const getUser = async (req, res) => {
    const id = req.params.id
    const user = await userService.getUser(id)
    res.status(200).send(user)
}

export const registUser = async (req, res) => {
    const { username, email, password } = req.body
    
    const passwordHash = await userHelper.hash(password)

    const doesUserExist = await userService.getUserByEmail(email)

    if(doesUserExist == undefined) {
        await userService.createUser(username,email,passwordHash)
        return res.status(201)
    } else {
        return res.status(409).send(rh.emailAddressTaken)
    }
}

export const login = async (req,res) => {
    const { email, password } = req.body

    const user = await userService.getUserByEmail(email)
    
    if (user == undefined) {
        return res.status(401).send(rh.invalidLogin)
    }

    const isValidEmail = email == user.email
    const isValidPassword = await userHelper.verifyHash(password, user.password)

    if(isValidEmail && isValidPassword) {
        return res.status(200).send(rh.success)
    } else {
        return res.status(401).send(rh.invalidLogin)
    }
}

export const deleteUser = async (req,res) => {
    try{
        const id = req.params.id
        await userService.deleteUser(id)

        return res.status(200).send(rh.success)
    } catch (err) {
        return res.sendStatus(500)
    }
}

export const updateUser = async (req, res) => {
    try{
        const id = req.params.id
        const { username, email, password} = req.body

        const passwordHash = await userHelper.hash(password)
        await.userService.updateUser(id, username, email, passwordHash)
        return res.status(200).send(rh.success)
    } catch (err) {
        return res.sendStatus(500)
    }
}