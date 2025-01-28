import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import conectDB from './config/db.js'

import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const port = process.env.PORT || 3000
conectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/users' , userRoutes)

console.log('hello');
app.listen(port , () => {
    console.log(`Server conect to port ${port} `);
})