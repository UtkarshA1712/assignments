const set = new Date()

function clock(){
    
    let time = new Date()
    let x = time.getHours()
    console.log(x+":"+time.getMinutes()+":"+time.getSeconds())
    
    // console.log(time.getMinutes())
    // console.log(time.getSeconds())
    }
setInterval(clock, 1000)