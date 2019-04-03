/* GAME RULE 
-player must guess a number between 1 and 10.
-Players get a certain amount of guessing chance(numberOfGuess).
-Notify in message displayed,the number of guesses remaining.
-Notify Player of correct answer when he loose all the guessing chance.
-Let Player choose whether they want to play again or not.
*/
//choose Target
var inputGiven = document.getElementById("numberinput");
var submitButton = document.querySelector(".submitButton");
var textDisplayed =document.querySelector(".disp") ;

//addEventListener
submitButton.addEventListener("click",checkGuess)


//create a random number 
var randomNumber = Math.floor(Math.random()*8+2);
//to check random number
//console.log(randomNumber);
//variable numberOfGuess
var numberOfGuess = 2;

//validation winning case
function checkGuess(){
init();
}

//newGame function
function newGame(){
    window.location.reload();
}

// //init function
function init(){
      //if input matches the randomNumber
      if(inputGiven.value>9 || inputGiven.value<1){
          //call error fn
        errorFn();
        //change button content from "submit" to "Play Again".
          submitButton.textContent = "Play Again";
          //using setTimeOut call newGame Fn
          window.setTimeout(newGame,4000);
          //event listener to call new Game fn
          submitButton.addEventListener("click",newGame);
      }
else if(inputGiven.value == randomNumber){
    //add class of border to input
    inputGiven.classList.add("border");
    //add class of "border-success"(green) to input
    inputGiven.classList.add("border-success");
    //disable the input(unclickable)
    inputGiven.setAttribute("disabled","disabled");
    //set message if you win
textDisplayed.textContent = inputGiven.value + " is Correct!!,You Win.";
//add green("text-success") color to message
textDisplayed.classList.add("text-success");
textDisplayed.classList.remove('text-danger');
//add display-3 class to message
textDisplayed.classList.add("display-3");
//change button content to "play again"
submitButton.textContent = "Play Again";
//event listener to call new game function
submitButton.addEventListener("click",newGame);
}
//number of guess still greater than 0
else if(numberOfGuess >0){
    // set message if your guess is incorrect
textDisplayed.textContent =inputGiven.value +" is not correct,You have"+ numberOfGuess+" guesses left.";
//decrese number of guess by 1
numberOfGuess--;
//
inputGiven.value = '';



//change message color to red("text-danger")
textDisplayed.classList.add("text-danger");
}
//number of guess when equal to 0
else{
    //display message showing game over and correct answer
    textDisplayed.textContent=("Sorry,"+"Game Over,"+"the correct answer was "+randomNumber);
    //change message color to red("text-danger")
    textDisplayed.classList.add("text-danger");
    //change button content to play again
    submitButton.textContent = "Play Again";
    //event listener to call newGame fn
    submitButton.addEventListener("click",newGame);
    //add border class to input
    inputGiven.classList.add("border");
    //add red border to input
    inputGiven.classList.add("border-danger");
    //disable the input using set Attribute
    inputGiven.setAttribute("disabled","disabled");
}
}


//errorFunction
function errorFn(){
    //create a new element
    var errorMessage = document.createElement("h5");
    //add class of "text-danger"
    errorMessage.classList.add("text-danger");
    //input validation
    var text = document.createTextNode("Please Enter a Number between 1 and 10");
    //append textNode to element
    errorMessage.appendChild(text);
   //select target
    position = document.querySelector(".main");
    //insert errorMessage before input.
    position.insertBefore(errorMessage,inputGiven);
}

