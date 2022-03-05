var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
    settingupbuttons();
    settingupsquares();
    reset();
}



function settingupsquares(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again";
            }
        });
    }
}



// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display ="none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display ="block";
//     }
// });

function settingupbuttons(){
    for(var i = 0; i < modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("selected");
            modebuttons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

resetButton.addEventListener("click", function(){
    reset();
});



function changeColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){

    var arr = [];
     for(var i = 0; i < num; i++){
        arr.push(randomColor());
     }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b + ")";

}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.display = "block";
       squares[i].style.backgroundColor = colors[i];
       }else{
       squares[i].style.display = "none";
       }   
   }
    h1.style.backgroundColor = "steelblue";
}