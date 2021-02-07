const path = require('path')
const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const colors = require('colors')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middleware/error')


// Load env vars
dotenv.config({path: './config/config.env'})

// Connect To DB
mongoose.connect('mongodb+srv://Ahmed:ahmed123@cluster0.jqlsh.mongodb.net/extension?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }
).catch(err=> console.log(err));
console.log(`MongoDB Connected `.cyan.bold)

//Routes
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')


const app = express();



// Body Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());


// CORS
app.use(cors());



// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Mount Routers
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/auth/users', usersRoutes);


app.use(errorHandler);



//listen
const PORT = process.env.PORT || 6000

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle Unhandle promise rejections
process.on('unhandledRejection', ( err, promise )=>{
    console.log(`Error: ${err.message}`.red)
    // Close server & exit process
    server.close(()=> process.exit(1))
})