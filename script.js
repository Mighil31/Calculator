var upDisplay = document.querySelector('#upper-display p');
var lowDisplay= document.querySelector('#lower-display p');

// console.log(document.querySelector('#upper-display p').textContent);
// console.log(document.querySelector('#lower-display p').textContent);


let a, b, op;
let operations = "+-*/";


let clearScreen = function(){
    upDisplay.textContent = "";
    lowDisplay.textContent = "0";
    a = null;
    b = null;
}


// console.log(buttons);
document.querySelectorAll(".button.num").forEach(btn => {
    btn.addEventListener("click", function(event){
        let input = event.target.textContent;
        if (lowDisplay.textContent === "0")
        {
            lowDisplay.textContent = input;
        } else {
            lowDisplay.textContent += input;
        }
    });
})

document.querySelector(".button.clear").addEventListener("click", clearScreen);

document.querySelector(".button.back").addEventListener("click", function(event){
    lowDisplay.textContent = lowDisplay.textContent.slice(0, -1);
});

document.querySelectorAll(".button.op").forEach(btn => {
    btn.addEventListener("click", function(event){
        if (a){
            b = +lowDisplay.textContent;
            a = res(a,b, op);
            let newOp = event.target.textContent;
            upDisplay.textContent += b + " " + newOp + " ";
            op = newOp;
        } else {
            op = event.target.textContent;
            a = +lowDisplay.textContent;
            upDisplay.textContent += a + " " + op + " ";
        }        
        
        lowDisplay.textContent = "0";
    });
})

document.querySelector(".button.equal").addEventListener("click", function(event){
    b = +lowDisplay.textContent;
    lowDisplay.textContent = res(a, b, op);
    upDisplay.textContent = ""
    a = null;
    b = null;
});


function res(a, b, op)
{
    switch(op)
    {
        case '+':
            return parseFloat(a+b);
            break;
        case '-':
            return a - b;
        case '*':
            return a*b;
        case '/':
            if(b == 0)
                alert('You have destroyed the universe with your shenanigans.')
            return a/b;
        
    }
}

clearScreen();