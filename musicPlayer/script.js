document.addEventListener("DOMContentLoaded", function () {
    let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let ctrlIcon = document.getElementById("ctrlIcon");
    let listIcon = document.getElementById("list");
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
});


