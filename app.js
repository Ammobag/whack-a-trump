document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const currentTime=document.querySelector("#timeLeft")
  let scoreDisplay = document.querySelector("#score");
  let score = 0;
  let timerId = 0;
  movetrump();

  function movetrump() {

    timerId = setInterval(appearTrump, 500);
  }

  function appearTrump() {
    for (item of squares) {
      item.classList.remove("trump");
    }
    let randomPosition = Math.floor(Math.random() * 9);
    squares[randomPosition].classList.add("trump");
    hitPosition = randomPosition;
  }

  for (let i = 0; i <squares.length; i++) {
    let item = squares[i];
    item.addEventListener("mouseup", () => {
      hitPosition++;
      if (item.id == hitPosition) {
        score++;
        scoreDisplay.innerHTML = score;
        obj.play();
        hitPosition = null;
      }
    });
  }
  function countDown(){
    currentTime.innerHTML=currentTime.innerHTML-1
    if(currentTime.innerHTML==0)
    {
      clearInterval(timer);
      clearInterval(timerId)
      alert("Congratz U have made America great again!")
      currentTime.innerHTML=0;
    }
  }
  let timer=setInterval(countDown,1000)

  //sound

  var obj = document.createElement("audio");
  obj.src="click.mp3";
  obj.volume=0.10;
  obj.autoPlay=false;
  obj.preLoad=true;       


  
});
