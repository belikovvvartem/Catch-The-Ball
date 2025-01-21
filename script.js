let ball = document.getElementById("ball");
let counter = document.getElementById("counter");
let field = document.getElementById("field");
let count = 0;
let moveInterval;
let speed = 1000;



function moveBallRandomly() {
    const fieldRect = field.getBoundingClientRect();
    const ballSize = ball.offsetWidth;
  
    const maxX = fieldRect.width - ballSize;
    const maxY = fieldRect.height - ballSize;
  
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    
    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
  }


  function startGame() {
    clearInterval(moveInterval); 
    moveInterval = setInterval(moveBallRandomly, speed); 
}


document.getElementById("normal").addEventListener("click", () => {
    speed = 1000; 
    startGame();
});

document.getElementById("average").addEventListener("click", () => {
    speed = 500; 
    startGame();
});

document.getElementById("impossible").addEventListener("click", () => {
    speed = 200; 
    startGame();
});



ball.addEventListener("click", ()=>{
  count += 10; 
  counter.textContent = count; 
  counter.style.color = "greenyellow";
  field.style.background = "rgba(172, 255, 47, 0.543)";

  setTimeout(() => {
    counter.style.color = "white";
  }, 1000);
  setTimeout(() => {
    field.style.background = "#AECCC6";
  }, 100);
  event.stopPropagation();
});


field.addEventListener("click", ()=>{
    count -= 10; 
    counter.textContent = count; 

    counter.style.color = "red";
    field.style.background = "rgba(255, 0, 0, 0.543)";

    setTimeout(() => {
      counter.style.color = "white";
    }, 1000);
      setTimeout(() => {
    field.style.background = "#AECCC6";
  }, 100);
    
  });


