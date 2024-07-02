// 
const mongoose = require('mongoose');

const connectionString="mongodb+srv://roshanroy359:9605778419@cluster0.qq3pvti.mongodb.net/recipeDb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("Recipe Server connected succesfully");
    }
).catch((err)=>{
    console.log(err);
})