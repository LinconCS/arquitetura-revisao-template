import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/ping", (req, res) => {
  res.send("Pong!")
})

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003")
})

app.use("/users", userRouter)