const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('TIMED OUT');
    },2000);
    setTimeout(()=>{
        resolve('HELLO!!');
    },1500);
})
promise.then(
    (value)=>{
    console.log(`True: ${value}`);
    },
    (error)=>{
    console.log(`Error : ${error}`);
    }
);
