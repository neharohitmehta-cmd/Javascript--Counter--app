let count =document.querySelector("#count");
let decrease =document.querySelector("#decrease");
let reset =document.querySelector("#reset");

let increase= document.querySelector("#increase");

// starting value
let number=0;

// plus Button

increase.addEventListener("click",function(){
    number++;
    count.innerText =number;
});

// minus Button


decrease.addEventListener("click",function(){
    if(number>0){
        number--;
    }else{
        count.innerText="Connot go below Zero";
        return;
    }

    count.innerText =number;
});


// reset button
reset.addEventListener("click", function(){
    number=0;
    count.innerText=number;
});
