console.log("This is Javascript function");

// console.log(name1 + " ji ki Jay ho");
// console.log(name2 + " ji ki Jay ho");
// console.log(name3 + " ji ki Jay ho");
// console.log(name4 + " ji ki Jay ho");
// console.log(name5 + " ji ki Jay ho");

let name1 = "Pahalvan veer baba";
let name2 = "Murli";
let name3 = "Ram";
let name4 = "Hanumaan";
let name5 = "Bholenath";
greettext = "Good morning";

// Basically ye function kuchh is tarah kaam karta hai 
// ki ek name do function ka aur usme usse kuchh karne ko bolo 
// aur tab us function ko call kar do uske name se to vo run ho jayega
// isme ek aur chiz hota hai ki kabhi kabhi aap variables 
// banate hai ki is variable ko show kar do jab mai isse call karunga 
// to vaha kya karna hai agar aap parameter nhi to to utomatic
// run ho jayega agar aap chahte hai ki jab mai call karu tabhi
// run hot to aapko parameter dena hoga aur run karne ke liye funtion name aur uss variable ka name dena hoga 

function greet(name1,greettext){
    console.log(greettext + " " + name1)
    console.log(name1 + " ji ki Jay ho")
};
// let returnval = greet(name3);
// console.log(returnval)

greet(name1,greettext);
// greet();
// greet();
// greet();
// greet();

function sum(a, b, c){
    let d = a+b+c;
    return d;
}



