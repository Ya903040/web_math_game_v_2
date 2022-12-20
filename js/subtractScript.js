let n1 = Math.floor(Math.random() * 30 + 1);
let n2 = Math.floor(Math.random() * 29 + 1);

document.getElementById("firstNum").value = n1;
document.getElementById("secondNum").value = n2;
let correctAnswers = 0;

let adds = n1 - n2;

function GameForSub() {
    let user = document.getElementById("inputNum").value;

    if (user == adds) {
        correctAnswers ++;
        document.getElementById("score").innerHTML = correctAnswers;
        document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";
    } else {
        document.getElementById("ans").innerHTML = "Correct Answer was " + adds + " . Try Again";
    }

    user = document.getElementById("inputNum").value = " ";


    n1 = Math.floor(Math.random() * 31 + 1);
    n2 = Math.floor(Math.random() * 29 + 1);

    document.getElementById("firstNum").value = n1;
    document.getElementById("secondNum").value = n2;

    adds = n1 - n2;
}