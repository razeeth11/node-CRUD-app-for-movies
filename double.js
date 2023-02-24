// console.log("Hello world!");

// let fun = setTimeout ( ()=>{
//     console.log("Madara Uchiha");
// },5000)

// console.log(fun);

// console.log(global);

// console.log(process.argv);

// var name = (n)=>{
//    return n*2 ;
// }

// console.log(name(process.argv[2]))


// var fahrenheit = (n)=>{
//    return (n * 9/5) + 32 ;
// }

// console.log("Fahrenheit : " + fahrenheit(process.argv[2]).toFixed(2))

// const os = require("os")

// console.log((os.freemem()/1024/1024/1024).toFixed(2));


// const fs = require("fs")

// const quote = "Don't settle for average if you have the ability to achieve greatness"

// const val = process.argv[2]

// for (let i = 1; i <= val; i++) {
//   fs.writeFile(`./Backup/document${i}.html`, quote , ()=>{
//     console.log("Completed");
//   })
// }

// const fs = require ("fs") 

// fs.readFile("./context.txt", "utf-8" , (err,data)=>{
//   if(err){
//     console.log("Something Error" , err);
//   } else {
//     console.log(data);
//   }
// } )

const fs = require ("fs") 
const data = "The one who abandon his teammates are worser than scum"

fs.appendFile("./context.txt", "\n" +  data , (err,data)=>{
  if(err){
    console.log("Something Error" , err);
  } else {
    console.log(data);
  }
} )