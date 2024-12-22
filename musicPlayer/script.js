let circle;
var listIconClicked = true;

    let songImg = document.querySelector("song-img");

    if (!songImg) {
        // Create the image dynamically if it's null
        songImg = document.createElement("img");
        songImg.id = "song-img";
        songImg.src = "media/lofi.png"; // Default image
        songImg.alt = "Song Image";

       
        
    }

    console.log("Image added successfully:", songImg);

document.addEventListener("DOMContentLoaded", function () {
    let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let ctrlIcon = document.getElementById("ctrlIcon");
    let listIcon = document.getElementById("list");
    circle = document.getElementById("circle");

console.log(songImg);
   
    // Update the progress bar every second

    // Set the max value for the progress bar once metadata is loaded
    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
    };
    // Play/Pause button click event
    ctrlIcon.addEventListener("click", function () {
        if (ctrlIcon.classList.contains("bi-play-fill")) {
            song.play();
            ctrlIcon.classList.remove("bi-play-fill");
            ctrlIcon.classList.add("bi-pause-fill");

            // Replace the play icon with the pause icon
            ctrlIcon.innerHTML = `
                <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zM10.5 3.5A.5.5 0 0 1 11 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
            `;
        } else {
            song.pause();
            ctrlIcon.classList.remove("bi-pause-fill");
            ctrlIcon.classList.add("bi-play-fill");

            // Replace the pause icon with the play icon
            ctrlIcon.innerHTML = `
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            `;
        }
    });

    // Update progress bar dynamically
    setInterval(() => {
        if (!song.paused) {
            progress.value = song.currentTime;
        }
    }, 500);
    // Allow user to change song's current time via progress bar
    progress.onchange = function () {
        song.currentTime = progress.value;
        if (song.paused) {
            song.play();
        }
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");
    };

    listIcon.addEventListener("click", function (){

        listIconClicked = !listIconClicked;
        

        if (listIconClicked === true) {
            deleteUI();
            console.log("should have deleted element")
        
        }
        else {
            let songs =  ["LD In The Hood", "Sajads Dilemma", "song 3"]
            let songss = [
                {
                    title: "LD In The Hood", 
                    url:"LD_in_thehood.mp3",
                    img: "ld-in-da-hood.png"
                },
                {
                    title: "LD In The Hood2", 
                    url:"LD_in_thehoodddddd.mp3",
                    img: "lofiiiiii.png"
                }
            ]
            const songDiv = genUI(songss);
            circle.appendChild(songDiv);
        }

    })


});



function deleteUI(){
    circle.removeChild(document.querySelector('.list-of-songs'));
}

function genUI(songs){
    const songDiv = document.createElement("div");
    const ul = document.createElement("ul");
    for(let i=0; i<songs.length; i++){
        const li = document.createElement("li");
        li.innerHTML = songs[i].title;
        ul.appendChild(li);
        li.addEventListener("click", function(){
            newSong(songs[i])
            console.log("clicked");
        });
    }
    songDiv.appendChild(ul);
    songDiv.classList.add("list-of-songs");
    return songDiv;

}

function newSong(parameter){
    
    songTitle.innerHTML = parameter.title;
        songImg.src = parameter.img;
        console.log(songImg)

    if (songTitle) songTitle.innerHTML = parameter.title;
    if (songImg) {
        songImg.src = parameter.img; // Set the new image
    } else {
        console.error("songImg element not found.");
    }
    console.log("Updated song:", parameter.title);


};
