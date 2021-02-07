const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')



dotenv.config({path: './config/config.env'})
// Coonect To DB
mongoose.connect('mongodb+srv://Ahmed:ahmed123@cluster0.jqlsh.mongodb.net/extension?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }
).catch(err=> console.log(err));



// Load Users
const User = require('./models/User')


// Read JSON Files
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
)




// Import into DB
const importData = async ()=>{
    try {
        await User.create(users);

        console.log('Data Imported...'.green.inverse)
        process.exit();
    } catch (err) {
        console.log(err)
    }
}

// Delete Data
const deleteData = async ()=>{
    try {
        await User.deleteMany();

        console.log('Data Distroyed...'.red.inverse)
        process.exit();
    } catch (err) {
        console.log(err)
    }
}


if(process.argv[2] === '-i'){
    importData()
}else if(process.argv[2] === '-d'){
    deleteData()
}