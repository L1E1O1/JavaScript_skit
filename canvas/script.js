document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  let context = canvas.getContext("2d");

  canvas.style.backgroundColor = "#3a105e";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  //vill du ge den en färg så måste du lägga inann du gör den för ngn annledning
  //annrs får den ingen färg
  context.fillStyle = "#301f9c";

  //first 2 is cordinates x, y // de andra två r width och height
  context.fillRect(300, 0, 100, 100);

  //circle
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 20; // how thick it is
  context.arc(100, 100, 50, 0, Math.PI * 2, false);
  context.stroke(); // makes a stroke no fill
  context.closePath();

  class Circle {
    constructor(xpos, ypos, radius, color) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.radius = radius;
      this.color = color;
    }
    draw(context) {
        context.beginPath();
      context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2 , false);
      context.stroke(); 
      context.lineWidth = 2;
      context.closePath();
    }
  }
//stores into construktor
  let my_circle = new Circle(100,400, 50 , "black");
  my_circle.draw(context);

  let my_circle2 = new Circle(100,600, 50 , "black");
  my_circle2.draw(context);

  
  let allCircles = [];



  let  createCircle = function(circle) {
        my_circle.draw(context);
  }

  for (var numbers = 0; numbers < 10; numbers++ ){
        let randomY = Math.random() * canvas.height;
        let randomX = Math.random() * canvas.width;     


        let my_circle = new Circle(randomX,randomY, 50 , "black");
        allCircles.push(my_circle);
        createCircle(allCircles[numbers]);
  }
  

  console.log(allCircles);
});
