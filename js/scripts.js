jQuery(document).ready(function() {
    var userInput = "";
    var codedSentence = "";
    jQuery("p").click(function(){
        userInput = prompt("Please enter your sentence to be coded:");
    });



    var capitalizeLetters = function(sentence) {
        return codedSentence = userInput.slice(0, 2).toUpperCase + userInput.slice(-1).toUpperCase;
    }
    console.log(capitalizeLetters);

    var reverseLetters = function(sentence) {
        return codedSentence = codedSentence.str.split("").reverse().join("");
    }
    console.log(reverseLetters);

    var finalCodedMessage = function(sentence) {
        return userInput.concat(codedSentence);
    }

    alert(finalCodedMessage);
    console.log(finalCodedMessage);

    
});