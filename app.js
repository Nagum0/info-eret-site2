console.log("Hello user who just inspected the page!")

//Feladat #1
const felOneLink = document.getElementById("felOneLink");
let n = 45987612;
let returnNum = "";

felOneLink.addEventListener("click", ()=>{
    returnNum = n.toString(2)
    console.log(returnNum)
});