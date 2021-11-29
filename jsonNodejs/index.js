const fs = require('fs');

const bioData = {
    name:"Aniket",
    age:19,
    channel:"Aniket Dhokane",
};

// 1: Convert it into JSON ---> Done
// 2:Dusre file mai aadd krr dena 
// 3: Read File 
// 4:again convert back to Json  
// 5:Show on console


const jsonData = JSON.stringify(bioData);// 1: Convert it into JSON

fs.writeFile('json1.json' ,jsonData, ()=>{  // Added the Json data in another file of json
    console.log("done");
})

fs.readFile("json1.json" ,"utf-8",(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);

})






// Method 1 ---> To convert object into JSON
// const jsonData = JSON.stringify(bioData);

// const objData =JSON.parse(jsonData)

// console.log(jsonData);
// console.log(objData);


// console.log(bioData.channel);