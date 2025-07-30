import {Webhook, webhook} from 'svix'


//Api controller func to manage clerk user w db
//http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {

    try {
        //create a svix instance with clerk
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })

        const {data, type} = req.body

        switch (type) {
            case "user.created": {
                
            }
                
                break;

            case "user.updated": {

            }
                
                break;

            case "user.deleted": {

            }
                
                break;
        
            default:
                break;
        }

    } catch (error) {
        console.log(error.message)
        res.JSON({success:false, message:error.message})
        
    }
    
}