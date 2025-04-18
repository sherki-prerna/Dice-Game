function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    const dice1 = document.querySelector(".img1");
    const dice2 = document.querySelector(".img2");
  
    dice1.classList.add("shake");
    dice2.classList.add("shake");
  
    setTimeout(() => {
      dice1.classList.remove("shake");
      dice2.classList.remove("shake");
  
      dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
      dice2.setAttribute("src", `images/dice${randomNumber2}.png`);
  
      const resultText = document.getElementById("result-text");
      if (randomNumber1 > randomNumber2) {
        resultText.textContent = "🎉 Player 1 Wins!";
      } else if (randomNumber2 > randomNumber1) {
        resultText.textContent = "🎉 Player 2 Wins!";
      } else {
        resultText.textContent = "😅 It's a Draw!";
      }
    }, 500);
  }
  