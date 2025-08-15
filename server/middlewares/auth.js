/* import jwt from 'jsonwebtoken'

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
*/



import { clerkClient } from '@clerk/clerk-sdk-node';
import userModel from '../models/userModel.js';

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "Not Authorized ! Login Again." });
    }

    const token_decode = jwt.decode(token);
    const clerkId = token_decode?.sub;
    req.body.clerkId = clerkId;

    // Fallback: if no MongoDB record, create it now
    let user = await userModel.findOne({ clerkId });
    if (!user) {
      const clerkUser = await clerkClient.users.getUser(clerkId);
      user = await userModel.create({
        clerkId: clerkUser.id,
        email: clerkUser.primaryEmailAddress?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        photo: clerkUser.imageUrl,
      });
    }

    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};