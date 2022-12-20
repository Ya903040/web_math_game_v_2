let n1 = Math.floor(Math.random() * 81 + 20)
let n2 = Math.floor(Math.random() * 9 + 2);
n1 = ((n1 / n2) | 0) * n2;
document.getElementById("firstNum").value = n1;
document.getElementById("secondNum").value = n2;
let correctAnswers = 0;



let adds = n1/n2;

function GameForDiv() {
    let user = document.getElementById("inputNum").value;

    if (user == adds) {
        correctAnswers ++;
        document.getElementById("score").innerHTML = correctAnswers;
        document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";
    } else {
        document.getElementById("ans").innerHTML = "Correct Answer was " + adds + " . Try Again";
    }

    user = document.getElementById("inputNum").value = "";


/*    n1 = Math.floor(Math.random() * 20 + 1);
    n2 = Math.floor(Math.random() * 20 + 1);*/



    let a = fn().join('/');
    function fn() {
        n1 = Math.floor(Math.random() * 81 + 20);
        n2 = Math.floor(Math.random() * 9 + 2);
        n1 = ((n1 / n2) | 0) * n2;
        return [n1, n2];
    }

    document.getElementById("firstNum").value = n1;
    document.getElementById("secondNum").value = n2;


    adds = eval(a);

}