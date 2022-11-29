const promise = new Promise((resolve,reject)=>{
    // const temp =10;
    setTimeout(()=>{
        reject('TIMED OUT');
    },1000);
    setTimeout(()=>{
        resolve('HELLO!!');
    },1500);

    // if(temp >5){
    // resolve('success');
    // }else{
    // reject('error');
    // }
    
})

promise.then(
    (value)=>{
    console.log(`True: ${value}`);
    },
    (error)=>{
    console.log(`Error : ${error}`);
    }
);
