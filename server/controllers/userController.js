import {Webhook, webhook} from 'svix'
import userModel from '../models/userModel.js'


//Api controller func to manage clerk user w db
//http://localhost:4000/api/user/webhooks

async function clerkWebhooks(req, res) {

    try {
        //create a svix instance with clerk
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const { data, type } = req.body

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }


                await userModel.create(userData)
                res.JSON({})
            }

                break

            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
                res.JSON({})
            }

                break

            case "user.deleted": {

                await userModel.findOneAndDelete({ clerkId: data.id })
                res.JSON({})

            }

                break

            default:
                break
        }

    } catch (error) {
        console.log(error.message)
        res.JSON({ success: false, message: error.message })

    }

}


export {clerkWebhooks}


const userCredit = async (req, res) => {
    
}