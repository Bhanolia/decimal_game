
document.addEventListener("DOMContentLoaded", (event) => {
    let question = document.querySelector(".question");
    let answer = document.getElementById("guess").value;
    let scores = document.querySelector(".scores");
    let timer = document.querySelector(".timer");
    let surrender = document.querySelector(".surrender");
    let button = document.querySelector(".submit");

    let score = 0;
    let countdown = 10;

    let number = getRandomInt(0, 255);
    question.innerHTML = number.toString(2);
    console.log(number);




    let timerId = setInterval(function () {
        countdown--;
        if (countdown >= 0) {
            timer.innerHTML = countdown;
        }
        if (countdown === 0) {
            reset();
            countdown = 10;
            timer.innerHTML = countdown;
        }
    }, 100 * countdown);


    button.addEventListener('click', function () {
        reset();
        console.log(answer);
        console.log(score);
    });


    surrender.addEventListener('click', function () {
        endGame();
    });




    function reset() {
        checker();
        number = getRandomInt(0, 255);
        question.innerHTML = number.toString(2);
        answer.value = '';
        console.log("Reset");
    }



    function checker() {
        if (answer.value === number) {
            score++;
            scores.innerHTML = score;
        } else {
            score--;
            scores.innerHTML = score;
        }
    }

    function endGame() {
        clearInterval(timerId);
        window.location.href = `result.html?score=${score}`;
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
