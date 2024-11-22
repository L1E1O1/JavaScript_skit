var notesContainer;
var createBtn;
var amountOfNotes = 0;


console.log(config.apiKey);
document.addEventListener("DOMContentLoaded", function () {
    notesContainer = document.querySelector(".notes-container");
    createBtn = document.querySelector(".notes-btn");

    function updateStorage(curNotes) {
        localStorage.setItem(curNotes.dataset.noteNr, curNotes.innerText);
        console.log("Storage updated");
        console.log(localStorage.getItem(curNotes.dataset.noteNr));
    }

    function findHighestNoteNumber() {
        let highestNoteNumber = 0;
        for (const key of Object.keys(localStorage)) {
            const noteNumber = parseInt(key.replace("Notes-", ""), 10);
            if (!isNaN(noteNumber) && noteNumber > highestNoteNumber) {
                highestNoteNumber = noteNumber;
            }
        }
        return highestNoteNumber;
    }

    function showNotes() {
        amountOfNotes = findHighestNoteNumber() + 1;
        const notes = Object.keys(localStorage);
        notes.forEach(function (note) {
            let inputBox = document.createElement("p");
            inputBox.innerText = localStorage.getItem(note);
            inputBox.dataset.noteNr = note;
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable", "true");

            let img = document.createElement("img");
            img.src = "/noteapp/images/delete.jpg";

            inputBox.appendChild(img);
            notesContainer.appendChild(inputBox);
        });
    }

    createBtn.addEventListener("click", function () {
        let newNoteNumber = amountOfNotes++;
        let inputBox = document.createElement("p");
        inputBox.dataset.noteNr = "Notes-" + newNoteNumber;
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");

        let img = document.createElement("img");
        img.src = "/noteapp/images/delete.jpg";

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage(inputBox);
    });

    notesContainer.addEventListener("click", function (del) {
        if (del.target.tagName === "IMG") {
            del.target.parentElement.remove();
            localStorage.removeItem(del.target.parentElement.dataset.noteNr);
        }
        if (del.target.tagName === "P") {
            del.target.onkeyup = function () {
                updateStorage(del.target);
            };
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    });

    showNotes();


  document.getElementById("aiBtn").addEventListener('click', async function () {
    console.log("AI is generating notes..");
    const prompt = "can you make a test out of these notes?"; // + notes id
    const url = `https://api.openai.com/v1/engines/davinci/completions`;


    aiTestContainer = document.getElementById("aiTestContainer");
    let aiInputBox = document.createElement("p");
    aiInputBox.className = "ai-input-box"
   // aiInputBox.innerText = "working";
    // aiInputBox.setAttribute("contenteditable", "true"); ksk vill ha d vi får se
    
    aiTestContainer.appendChild(aiInputBox);

      try {
                const response =  await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer ' + config.apiKey
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [
                            { role: "system", content: "You are a helpful assistant." },
                            { role: "user", content: prompt }
                        ]
                    })
                });

             if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
             }
            } catch (error) {
                console.error(error);
            }
        
});


});
