const fs = require('fs');

fs.appendFile("mayank.txt"," Sab kaisa chal raha hai",function(err){
    if(err)
        console.error(err);
    else
    console.log("not done");
})