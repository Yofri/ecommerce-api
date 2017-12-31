import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {mongoose, db} from './config'
import {user, store, transaction} from './routes'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/user', user)
app.use('/store', store)
app.use('/transaction', transaction)

db.on('error', () => console.log(`Error connecting to database`))
db.once('open', () => console.log(`Connected to database`))
app.listen(port, () => console.log(`Express listening on port ${port}`))