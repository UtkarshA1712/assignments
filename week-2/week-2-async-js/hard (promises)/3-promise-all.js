/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
const start = Date.now()
function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,n*1000);
    })
}
function wait1(t) {
    return new Promise((resolve,reject)=>{
        console.log("wait 1 done")
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        console.log("wait 2 done")
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        console.log("wait 3 done")
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
        let ans = Date.now() - start
        //console.log(typeof(ans) )
        return ans 
      });
}
calculateTime(2,3,5)

module.exports = calculateTime;
