/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        
        setTimeout(resolve,t*1000);
    })
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now()
    await wait1(t1)
    console.log("wait 1 done")
    await wait2(t2)
    console.log("wait 2 done")
    await wait3(t3)
    console.log("wait 3 done")
    console.log(Date.now()- start)
    let ans = Date.now()- start
    return ans 

}
calculateTime(2,3,5)

module.exports = calculateTime;
