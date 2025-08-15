 import jwt from 'jsonwebtoken'

//middleware func to decode jwt token to get clerkId

const authUser = async (req, res, next) => {

    try {

        const token = req.headers.token

        if (!token) {
            return res.json({success: false, message: "Not Authorized ! Login Again."})
        }

        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode?.sub || req.body.clerkId

        next()
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
        
    }
    
}


export default authUser 




