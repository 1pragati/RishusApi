const express = require('express');
const dotenv = require('dotenv')
const DB =  require('./config/dbConfig')
const employeeRoute = require("./views/employee.js");
const hrRoute = require('./views/hrroute.js');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8000

app.get('/api', (req, res)=>{
    res.send('API is Running');
})
app.use(cors());


app.use('/emp', employeeRoute);
app.use('/hr',hrRoute);



app.listen(PORT, ()=>{
    console.log(`Server Running at http://localhost:8000`);
});
