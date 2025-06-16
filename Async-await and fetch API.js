// async function geatData() {
//     setTimeout(function(){
//         console.log("i m insidw set timeout block");
//     }, 3000);
    
// }

// geatData();

//await

//fetch API

// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com//posts/1/comments');

//     let data = await response.json();
//     console.log(data);
    
// }
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const Option = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "Sonu kumar" }),
 
};

async function getData() {
    const response = await fetch(URL,Option);
    let data = await response.json();
    console.log("my data",data);
    
}

getData();