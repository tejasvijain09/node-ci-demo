const add = require("./index");

if(add(10,20) === 30){
    console.log("Test passed: add(10, 20) is equal to 30");
}else{
    throw new Error("Test failed: add(10, 20) is not equal to 30");
}