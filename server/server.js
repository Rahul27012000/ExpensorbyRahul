import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = 4000
const app = express()

app.use(cors());

await mongoose
  .connect(
    'mongodb+srv://Raj27012000:Raj27012000@rahulexpensor.shodixw.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log('Server is running at http://localhost:4000')
})
