let num = 0
const interval = setInterval(()=>{
    console.log(num);
    num++;
},1000);

setTimeout(()=>clearInterval(interval), 5000);


let rafCount = 0;
let runAgainAt = Date.now();

function rafCounter(){
    if(Date.now() > runAgainAt){
        console.log(rafCount);
        rafCount++;
        runAgainAt = Date.now() + 1000;
    }
    requestAnimationFrame(rafCounter);
}
requestAnimationFrame(rafCounter);
