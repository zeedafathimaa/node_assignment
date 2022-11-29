let counter=0;

async function hello(mes){
    console.log(mes);
    counter++;

    let promise= new Promise((res,rej)=>{
        setTimeout(res("works"),1000);
        setTimeout(rej("timeout"),2000);  
    });
    let result= await promise;
    return `${mes} ${counter} ${result}`; 
}

function output(mes){
    counter++;
    console.log(`message- ${mes} counter- ${counter}`)
}

hello('hi').then(
    (val)=>{console.log(val);
    })

for(let i=0;i<5;i++){
    output(`loop ${i}`);
}

    