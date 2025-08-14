import 'dotenv/config'
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
import cors from "cors";

const allowedOrigins = [
  "https://snipify-bg.vercel.app", // frontend deployed link
  "http://localhost:3000" // local development
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



//API routes
app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)


app.listen(PORT, () => console.log("Server Running on port "+PORT))

