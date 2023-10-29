console.log('My Journey start from 0.')
// SeTimeOut = SetTimeOut allows us to run the function once after the interval of time.
// ClearTimeOut = SetTimeOut allows us to run the function Repeatedly after the interval of time.

function greet(name, byetext){
console.log(' good bye'+" "+name+" "+byetext);

}
// greet();
// setTimeout(greet, 5000, ' guys', ' take care');
// timeout = setTimeout(greet, 5000, "aman", "take care");
// console.log(timeout);
// 
// clearTimeout(timeout);

// timeinterval = setInterval(greet, 1000, "aman","take care");
// clearInterval(timeinterval)

function displaytime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
