async function hello(mes){
    console.log(mes);
    let promise= new Promise((res,rej)=>{
        setTimeout(res("it works"),3000);
        setTimeout(rej("timeout"),2000);  
    });
    let result= await promise;
    return `${mes} ${result}`; 
}
function output(mes){
    console.log(`${mes}` )
}
hello('hi').then(
    (val)=>{console.log(val);
    })

    