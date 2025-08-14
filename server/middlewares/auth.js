 /* import jwt from 'jsonwebtoken'

//middleware func to decode jwt token to get clerkId

const authUser = async (req, res, next) => {

    try {

        const token = req.headers.token

        if (!token) {
            return res.json({success: false, message: "Not Authorized ! Login Again."})
        }

        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode?.clerkId || req.body.clerkId

        next()
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
        
    }
    
}


export default authUser */

import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.token
        if (!token) {
            return res.json({success: false, message: "Not Authorized ! Login Again."})
        }

        // verify token with Clerk secret or public key
        const token_decode = jwt.verify(token, process.env.CLERK_WEBHOOK_SECRET)
        req.body.clerkId = token_decode?.sub  // Clerk's user ID is usually in `sub`

        next()
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "User not found" })
    }
}

export default authUser
