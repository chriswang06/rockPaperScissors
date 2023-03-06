
// // playGame(1, getComputerChoice())
// rock.addEventListener('click', playGame(1, getComputerChoice()));
rock.addEventListener('click', function (e) {
    console.log(playRound(1));
  });
paper.addEventListener('click', function (e) {
    console.log(playRound(2));
  });
scissors.addEventListener('click', function (e) {
    console.log(playRound(3));
  });

function playRound(pChoice){
    cpu = getcpu();
    if((pChoice==1&&cpu==1)||(pChoice==2&&cpu==2)||(pChoice==2&&cpu==2)){
        const container = document.querySelector('.ties');
        const p = document.createElement('p');
        container.textContent += " | ";
        return 1; //tie
    }
    else if((pChoice==1&&cpu==3)||(pChoice==2&&cpu==1)||(pChoice==3&&cpu==2)){
        const container = document.querySelector('.wins');
        container.textContent += " | ";
        return 2; //win
    }
    else{ 
        const container = document.querySelector('.losses');
        const p = document.createElement('p');
        container.textContent += " | ";
        return 3 //lose}
    }
  }
function getcpu() {
    return Math.floor(Math.random() * 3) + 1;
  }