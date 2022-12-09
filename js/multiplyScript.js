let n1 = Math.floor(Math.random() * 20 + 1);
let n2 = Math.floor(Math.random() * 20 + 1);

document.getElementById("firstNum").value = n1;
document.getElementById("secondNum").value = n2;

let adds = n1 * n2;

function GameForMultiply() {
    let user = document.getElementById("inputNum").value;

    if (user == adds) {
        document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";
    } else {
        document.getElementById("ans").innerHTML = "Correct Answer " + adds + " . Try Again";
    }

    user = document.getElementById("inputNum").value = "";


    n1 = Math.floor(Math.random() * 20 + 1);
    n2 = Math.floor(Math.random() * 20 + 1);

    document.getElementById("firstNum").value = n1;
    document.getElementById("secondNum").value = n2;

    adds = n1 * n2;
}