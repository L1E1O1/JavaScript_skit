document.addEventListener("DOMContentLoaded", function () {
    let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let ctrlIcon = document.getElementById("ctrlIcon");
    let listIcon = document.getElementById("list");
    const circle = document.getElementById("circle");
    let count = 0;
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
console.log(song.currentTime);
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

        listIcon.addEventListener("click", function deleteUI(){
            listIconClicked = true;
        })

        let listIconClicked = false;
        const songDiv = document.createElement("div");
        const Ul = document.createElement("ul");
        const li1=document.createElement("li");
        const li2=document.createElement("li");
        const li3=document.createElement("li");
        const li4=document.createElement("li");
        const li5=document.createElement("li");



while (listIconClicked) {
        if (listIconClicked === true) {
            listIconClicked = false;
            circle.removeChild(songDiv);
        }
        else {
            circle.appendChild(songDiv);
            songDiv.classList.add("list-of-songs");
            songDiv.appendChild(Ul);
            Ul.appendChild(li1);
            Ul.appendChild(li2);
            Ul.appendChild(li3);
            Ul.appendChild(li4);
            Ul.appendChild(li5);
    
            li1.innerHTML = "song 1";
            li2.innerHTML = "song 2";
            li3.innerHTML = "song 3";
            li4.innerHTML = "song 4";
            li5.innerHTML = "song 5";
    
            songDiv.classList.add("list-of-songs");
            console.log(songDiv.parentElement.className);
            listIconClicked = true;
        }
    }
        console.log(listIconClicked);
    })


});


