$(button).click(function(){
    userInput = prompt("Please enter your sentence to be coded:");
});



sentence();



var capitalizeLetters = function(sentence) {
    return codedSentence = userInput.slice(0, 2).toUpperCase + userInput.slice(-1).toUpperCase;
}

var userInput = "";
var codedSentence = "";
