import * as userService from '../Services/UserService.js'
import * as helper from '../Helpers/UserHelper.js'

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
    
    const passwordHash = await helper.hash(password)

    const doesUserExist = await userService.getUserByEmail(email)

    if(doesUserExist == undefined) {
        await userService.createUser(username,email,passwordHash)
        return res.status(201).send({success:true, message:null})
    } else {
        return res.status(409).send({success:false, message:"Email address already taken"})
    }
}