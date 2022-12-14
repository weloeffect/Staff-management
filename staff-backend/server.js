const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongodb database connection established successfully");
})

const staffRouter = require('./routes/staff');
const userRoutes = require('./routes/user')

app.use('/staff', staffRouter);
app.use('/api/user', userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})