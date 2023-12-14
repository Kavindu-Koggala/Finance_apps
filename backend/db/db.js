const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.URL)
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error');
        
    }
}

/*mongoose.connect("mongodb+srv://adminn:POGnfngz3PxHjbdJ@cluster0.oxpvthv.mongodb.net/fine?retryWrites=true&w=majority")
.then(() => console.log("Connected to the database"))
.then(() =>{
    app.listen(4000);
}) 
.catch((err) => console.log(err));*/

module.exports = {db}