const express = require("express")
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const {sequelize} = require('./sequelize/models')

const cors = require('cors')
const corsOptions = {
    origin : "*"
}

//middleware 
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Router
require('./router')(app)


// Connection
const connectDb = async () => {
    console.log('Checking database connection...');

    try {
        await sequelize.authenticate();
        console.log('Database connection established.');
    } catch(e) {
        console.log('Database connection failed', e);
        process.exit(1);
    }
};

// PORT
const PORT = process.env.PORT || 3000
// ( async () => {
//     console.log(`Attepting to run server on port ${PORT}`);
// }
// )
connectDb();
app.listen(PORT, () => {
    console.log(`Listen Port ${PORT}`);
})