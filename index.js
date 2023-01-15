const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config()


const cors = require('cors')
const corsOptions = {
    origin : "*"
}

//middleware 
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// PORT
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listen Port ${PORT}`);
})