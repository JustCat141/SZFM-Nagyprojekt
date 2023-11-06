import express from 'express'
import * as userController from '../Controllers/UserController.js'

export const userRouter = express.Router()

// Write your endpoints here...
userRouter.get('/', await userController.getUsers)
userRouter.get('/:id', await userController.getUser)
userRouter.post('/register', await userController.registUser)
userRouter.post('/login', await userController.login)

userRouter.delete('/:id',userController.deleteUser)