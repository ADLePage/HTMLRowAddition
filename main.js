//https://www.w3schools.com/jsref/prop_textarea_value.asp
function calculateRowReduction(){
    var column = 1;
    var firstValue = document.getElementById("submit1").value;
    var secondValue = document.getElementById("submit2").value;
    while(column < 5){
        document.getElementById("result"+column).textContent =
        (firstValue * document.getElementById("row1"+"column"+ column).value)
        +
        (secondValue * document.getElementById("row2"+"column"+ column).value);
        column++;
    }
}