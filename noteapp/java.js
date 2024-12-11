var notesContainer;
var createBtn;
var amountOfNotes = 0;
let highestNoteNumber = 0;
let aiBtn = document.getElementById('aiBtn');
let btnDiv = document.querySelector('.buttons');
let inputBox = document.createElement("p");

console.log(config.apiKey);
document.addEventListener("DOMContentLoaded", function () {
    notesContainer = document.querySelector(".notes-container");
    createBtn = document.querySelector(".notes-btn");


    //store notes in a local storage
    function updateStorage(curNotes) {
        localStorage.setItem(curNotes.dataset.noteNr, curNotes.innerText);
        console.log("Storage updated");
        console.log(localStorage.getItem(curNotes.dataset.noteNr));
    }
//makes sure that you cant create a new note 1 if there is already a note with the same number
// makes sure to know when a note is deleted and created
    function findHighestNoteNumber() {
        for (const key of Object.keys(localStorage)) {
            const noteNumber = parseInt(key.replace("Notes-", ""), 10);
            if (!isNaN(noteNumber) && noteNumber > highestNoteNumber) {
                highestNoteNumber = noteNumber;
            }
        }
        return highestNoteNumber;

    }
//show's notes stored in local storage

    function showNotes() {
        amountOfNotes = findHighestNoteNumber() + 1;
        const notes = Object.keys(localStorage);
        notes.forEach(function (note) {
            let inputBox = document.createElement("p");
            let aiBtn = document.createElement("button");
            inputBox.innerText = localStorage.getItem(note);
            inputBox.dataset.noteNr = note;
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable", "true");

            let img = document.createElement("img");
            img.src = "/noteapp/images/delete.jpg";

            inputBox.appendChild(img);
            notesContainer.appendChild(inputBox);

            aiBtn.textContent = "Generate Test";
            aiBtn.id = "aiBtn";
            aiBtn.className = "ai-Btn buttons";


            notesContainer.appendChild(aiBtn);
            console.log(btnDiv);
        });
    }

    //creates a new note and updates local storage when it's done
    createBtn.addEventListener("click", function () {
        let newNoteNumber = amountOfNotes++;
        let aiBtn = document.createElement("button");
    
        inputBox.dataset.noteNr = "Notes-" + newNoteNumber; // note id
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "/noteapp/images/delete.jpg";
    
        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage(inputBox);
    
        aiBtn.textContent = "Generate Test";
        aiBtn.id = "aiBtn";
        aiBtn.className = "ai-Btn";
        aiBtn.dataset.noteId = inputBox.dataset.noteNr; // Associate aiBtn with the note
    
        notesContainer.appendChild(aiBtn);
    });
    


        //reads the note id when clicked and logs it

    notesContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('input-box')) {
            let noteKey = event.target.dataset.noteNr;
            console.log(noteKey );
        }
    });

// deletes a note and updates local storage when it's done

notesContainer.addEventListener("click", function (del) {
    if (del.target.tagName === "IMG") {
        // Remove the note (parent element of the image)
        const noteElement = del.target.parentElement;
        const noteId = noteElement.dataset.noteNr;

        // Find and remove the associated aiBtn
        const associatedAiBtn = document.querySelector(`.ai-Btn[data-note-id="${noteId}"]`);
        if (associatedAiBtn) {
            associatedAiBtn.remove();
        }

        // Remove the note and update local storage
        noteElement.remove();
        localStorage.removeItem(noteId);
    }

    if (del.target.tagName === "P") {
        del.target.onkeyup = function () {
            updateStorage(del.target);
        };
    }
});


// allows users to press enter to create a new line when editing a note

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    });

    showNotes();

//sends notes to AI for to generate AI test

  document.getElementById("aiBtn").addEventListener('click', async function (e) {
    let test = e.srcElement.parentElement.innerText
    console.log("AI is generating notes..");
    const prompt = "can you make a test out of these notes?  " + test;  
    const url = `https://api.openai.com/v1/engines/davinci/completions`;
     
    console.log (prompt);


// ska försöka göra en function som creatar ai containern helt




   // aiInputBox.innerText = "working";
    // aiInputBox.setAttribute("contenteditable", "true"); ksk vill ha d vi får se
   const aiTestContainer = document.getElementById("aiTestContainer");
   const aiContainer = document.createElement('div');
   let aiInputBox = document.createElement("p");


aiContainer.className = 'ai-container';
aiInputBox.className = "ai-input-box";

aiContainer.appendChild(aiTestContainer);
aiTestContainer.appendChild(aiInputBox);


      try {
                const response =  await fetch(url, {
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
                    const errorDetails = await response.json();
                    console.error("Error:", response.status, errorDetails);
                } else {
                    const data = await response.json();
                    console.log("Response:", data);
                }

            } catch (error) {
                console.error(error);
            }
        
});





});
