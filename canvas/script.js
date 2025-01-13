document.addEventListener("DOMContentLoaded", function(){
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
context.arc(100, 100, 50, 0, Math.PI*2, false);
context.stroke();// makes a stroke no fill
context.closePath();
});