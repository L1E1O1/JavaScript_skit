function paragraf(){
    console.log("1")
    for (let i = 1; i < 10; i++){
        const meningar = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "Get busy living or get busy dying. - Stephen King",
            "You miss 100% of the shots you don’t take. - Wayne Gretzky",
            "The purpose of our lives is to be happy. - Dalai Lama",
            "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
            "You only live once, but if you do it right, once is enough. - Mae West",
            "The best way to predict the future is to create it. - Peter Drucker",
            "Life is 10% what happens to us and 90% how we react to it. - Charles R Swindoll",
        ]
        


      //  let nmr = document.createElement("p");
       // document.getElementById("paragraf").append(nmr);

        let randomIndex = Math.floor(Math.random() * meningar.length); // Generate random index
    let randomMening = meningar[randomIndex]; // Retrieve quote by index
    console.log(randomMening);
    document.getElementById("paragraf").innerHTML = randomMening;
    }
}
paragraf();
console.log("meningar")

//document.getElementById(paragraf);


