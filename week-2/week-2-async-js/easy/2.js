let i = 1;
function counter(){
    if(i<=10){
        console.log(i);
        i++;
        setTimeout(counter, 1000);
    }
}
counter()