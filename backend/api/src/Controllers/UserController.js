import * as userService from '../Services/UserService.js'
import * as userHelper from '../Helpers/UserHelper.js'
import * as rh from '../Helpers/ResponseHelper.js'
import { logger } from '../Helpers/Logger.js'

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers()
        res.status(200).send(users)
    }
    catch (err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userService.getUser(id)
        res.status(200).send(user)
    } catch (err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}

export const registUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const passwordHash = await userHelper.hash(password)

        await userService.createUser(username, email, passwordHash)

        logger.info(`A new user "${username}" has just registered!`)
        return res.status(201).send(rh.success)
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(401).send(rh.emailAddressTaken)
        }
        else {
            logger.error(err)
        }
        return res.sendStatus(500)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userService.getUserByEmail(email)

        if (user == undefined) {
            return res.status(401).send(rh.invalidLogin)
        }

        const isValidEmail = email == user.email
        const isValidPassword = await userHelper.verifyHash(password, user.password)

        if (isValidEmail && isValidPassword) {
            logger.info(`User ${user.username} logged in!`)
            return res.status(200).send(rh.success)
        } else {
            return res.status(401).send(rh.invalidLogin)
        }
    } catch (err) {
        logger.error(err)
        return res.sendStatus(500)
    }
}