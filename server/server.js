
const express = require('express')
const dotenv = require('dotenv').config({path: '../.env'});
const cors = require('cors')
const port = process.env.PORT || 8080
const mongoose = require('mongoose');
const app = express()

const URI = process.env.MONGO_URI;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use('*', (res, req) => res.status(400).json({message: 'Path not found, please try a different URL'})  )
app.use('/user', require('../backend/routes/userRouters'));
app.use('/diary', require('../backend/routes/diaryRouters'));

// CONNECT TO DB//
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => console.log('db connected bitches!!!!!'))
.catch((err => console.log(err))) ;

app.listen( port, () => console.log(`Server is listening at port ${port}`))



