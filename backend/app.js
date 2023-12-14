const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const { route } = require('./routes/transactions');
const app = express()

require('dotenv').config()


const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req, res) => {
    res.send("Hello world!!")
})

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

/*mongoose.connect("mongodb+srv://adminn:POGnfngz3PxHjbdJ@cluster0.oxpvthv.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to the database"))
.then(() =>{
    app.listen(4000);
}) 
.catch((err) => console.log(err));*/

const server = () => {
    app.listen(PORT, () =>{
        console.log('prot no:',PORT);
    })



    db()
   

}

server()