/* import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'



//App Config

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//Initialize middlewares
app.use(express.json())
app.use(cors())


//API routes
app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


//app.listen(PORT, () => console.log("Server Running on port "+PORT))

*/

 /* import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const app = express()
await connectDB()

// Configure CORS
const corsOrigin = process.env.NODE_ENV === 'production'
  ? 'https://snipify-bg.vercel.app'  // Your frontend domain
  : 'http://localhost:3000'           // Local dev

app.use(cors({
  origin: corsOrigin,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}))

// Middlewares
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

// Export app for Vercel
export default app
 */

import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const app = express()
await connectDB()

const corsOrigin = process.env.NODE_ENV === 'production'
  ? 'https://snipify-bg.vercel.app'
  : 'http://localhost:3000'

const corsOptions = {
  origin: corsOrigin,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))  // ✅ Handle preflight requests

app.use(express.json())

app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

export default app
