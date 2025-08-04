import express from 'express'
const { clerkWebhooks } = require ('../controllers/userController.js');


const userRouter = express.Router()


userRouter.post('/webhooks', clerkWebhooks)

export default userRouter