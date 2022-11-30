var fs = require('fs')

var obj={}

function one(){
    return new Promise(function(resolve,reject){
        fs.readFile('file1.txt', function(err,data){
            if(!err){
                resolve(data.toString())
            }
        })
    })
}

function two(){
    return new Promise(function(resolve,reject){
        fs.readFile('file2.txt', function(err,data){
            if(!err){
                resolve(data.toString())
            }
        })
    })
}

async function main() {
    obj['Data1']= await one();
    obj['Data2']= await two();
    console.log(obj);
}

main();
