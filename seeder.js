const fs = require('fs');
const mongoose = require('mongoose');
 require('dotenv').config();

const Bootcamp = require('./models/Bootcamp');


mongoose.connect(process.env.MONGO_URI);

// read JSON files
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8'));



const importData = async () =>{
        try {
            await Bootcamp.create(bootcamps);
            process.exit();
        } catch (err) {
            console.log(err);
        }
    }

  
    
const deleteData = async () =>{
    try {
        await Bootcamp.deleteMany();
        process.exit();
    } catch (err) {
        console.log(err);
    }
}


if(process.argv[2]=='-i'){
    importData();
}else if(process.argv[2]=='-d'){
    deleteData();
}