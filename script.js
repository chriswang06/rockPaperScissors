let pChoice;
let cpuChoice;

function getPlayerChoice(){
    let ans = prompt("Pick: rock, paper, scissors");
    ans = ans.toLowerCase();
    if( ans == "rock"){
        pChoice = 1;
    }
    else if (ans == "scissors"||ans == "scissor"){
        pChoice = 2;
    }
    else if (ans == "rock"){
        pChoice = 3;
    }
    else{
        console.log("that is not a right answer choice");
        getPlayerChoice();
    }
    return pChoice;
}
function translate(choice){
    if(choice == 1){
        return "rock";
    }
    else if (choice == 2){
        return "scissor";
    }
    else if ( choice == 3){
        return "paper";
    }
}
function calculate(pChoice, cpuChoice){
    if ((pChoice==1 && cpuChoice==1)||(pChoice==2&&cpuChoice==2)||(pChoice==3&&cpuChoice==3)){
        console.log("you tied.");
    }
    else if ((pChoice==1&&cpuChoice==2)||(pChoice==2&&cpuChoice==3)||(pChoice==3&&cpuChoice==1)){
        console.log("you won.");
    }
    else{
        console.log("you lost.");
    }
}
function announce(pChoice, cpuChoice){
    console.log("You picked: " + translate(pChoice) + ". The computer picked: " + translate(cpuChoice) + ".");
}
function getComputerChoice(){
    let cpuChoice = Math.floor(1+Math.random()*3);
    return cpuChoice;
}
function playGame(){
    for(let i = 0; i < 5; i++){
    console.log("Welcome to rock paper scissors!");
    cpuChoice = getComputerChoice();
    pChoice = getPlayerChoice();
    announce(pChoice, cpuChoice);
    calculate(pChoice, cpuChoice);
    }
}