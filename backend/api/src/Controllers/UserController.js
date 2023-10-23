import * as userService from '../Services/UserService.js'

export const getUsers = async (req, res) => {
    const users = await userService.getUsers()
    res.status(200).send(users)
}

export const getUser = async (req,res) => {
    const id = req.params.id
    const user = await userService.getUser(id)
    res.status(200).send(user)
}