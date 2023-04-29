
const shapes = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

// let score = 0;
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step1_shapes = document.querySelectorAll(".step1 button");
const rulesInstr = document.querySelector(".rules-instr");

const player = document.querySelectorAll(".player.shapes");
const house = document.querySelectorAll(".house.shapes");
const playAgain = document.querySelectorAll(".play-again");

let playerChoice = 0;
let houseChoice = 0;
let score = 0;

document.querySelector(".rules-btn").addEventListener("click", function() {
    rulesInstr.classList.remove("hide");
});
// close rules instr

window.onload = function() {
    playGame();
}

function playGame() {
    stepOne();
}

function stepOne() {
    step1.classList.remove("hide");
    step1_shapes.forEach(elem => elem.addEventListener("click", 
        function() {
            playerChoice = this.value;
            houseChoice = Math.floor(Math.random() * 3) + 1;
            console.log("P " + playerChoice);
            console.log("H " + houseChoice);
            stepTwo(playerChoice, houseChoice);
    
            setTimeout(function() {
                stepThree();
              }, 2000);
        }
    ));
}

function stepTwo(p, h) {
    let playerShape = shapes[p];
    let houseShape = shapes[h];

    step1.classList.add("hide");
    step2.classList.remove("hide");
    player.forEach(element => element.classList.add(playerShape) );
    player.forEach(element => element.firstElementChild.setAttribute("src", "images/icon-" + playerShape + ".svg"));

    setTimeout(function() {
        house.forEach(element => element.classList.add(houseShape));
        house.forEach(element => element.firstElementChild.setAttribute("src", "images/icon-" + houseShape + ".svg"));
        document.querySelector(".house.grid-item-3").classList.remove("hide");
      }, 1000);

}

function stepThree() {
    step2.classList.add("hide");
    step3.classList.remove("hide");

    if (playerChoice == houseChoice) {
        document.querySelector(".draw").classList.remove("hide");
    } else if ((playerChoice == 1 && houseChoice == 3) ||
            (playerChoice == 2 && houseChoice == 1) ||
            (playerChoice == 3 && houseChoice == 2)) {
                updateScore("win");
                document.querySelector(".player.winner").classList.remove("hide");
                document.querySelector(".you-win").classList.remove("hide");
    } else {
        if (score > 0) updateScore("lose");
        document.querySelector(".house.winner").classList.remove("hide");
        document.querySelector(".you-lose").classList.remove("hide");
    }
    
    // const play_again = prompt("Play again?")
    // if (play_again == "n") {
    //     console.log("Thanks for playing your final score is " + score);
    //     break;
    // } 

    // playAgain.forEach(element => element.addEventListener("click", function() {
    //     playGame();
    // }));
    
    // document.querySelector(".play-again").addEventListener("click", function() {
    //     step3.classList.add("hide");
    //     // document.querySelectorAll(".result").forEach(element => element.classList.add("hide"));
    //     reset(".result");
    //     reset(".step2 .house.shapes")
    //     reset(".player.winner")
    //     reset(".house.winner")
    //     playGame();
    // });
}

function updateScore(result) {
    result == "win" ? score++ : score--;
    document.querySelector(".score-number").innerHTML = score;
}

// function reset(selector) {
//     document.querySelectorAll(selector).forEach(element => element.classList.add("hide"));
// }

// while (true) {
//     const playerChoice = Number(prompt("Choose a shape"));
//     const houseChoice = Math.floor(Math.random() * 3) + 1;
//     console.log("Player chooses " + shapes[playerChoice]);
//     console.log("House chooses " + shapes[houseChoice]);
    
//     if (playerChoice == houseChoice) {
//         console.log("It's a tie!");
//     } else if ((playerChoice == 1 && houseChoice == 3) ||
//             (playerChoice == 2 && houseChoice == 1) ||
//             (playerChoice == 3 && houseChoice == 2)) {
//                 console.log("Player wins with " + shapes[playerChoice]);
//                 score++;
//     } else {
//         console.log("House wins with " + shapes[houseChoice]);
//     }
    
//     const play_again = prompt("Play again?")
//     if (play_again == "n") {
//         console.log("Thanks for playing your final score is " + score);
//         break;
//     } 
// }