const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch(err){
        console.log("Error while connecting DB -> ",err);
    }
}

module.exports = connectDB;