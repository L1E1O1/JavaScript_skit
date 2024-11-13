function updateStorage(curNotes){
    localStorage.setItem(curNotes.dataset.noteNr, curNotes.innerText);
    console.log("Storage updated");
    console.log(localStorage.getItem("notes-"+curNotes.dataset.noteNr));
}


function showNotes() {
    const notes = Object.keys(localStorage);
    notes.forEach(function(note){
        amountOfNotes++;
        //KOLLA VILKEN SOM ÄR DET HÖGST NOTES-SIFFRAN OCH GÖR amountOfNotes till den + 1
        console.log(amountOfNotes);
        let inputBox = document.createElement("p");
        inputBox.innerText = localStorage.getItem(note);
        inputBox.dataset.noteNr =  note;
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "http://127.0.0.1:5500/images/delete.jpg"; 

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        console.log(localStorage.getItem(note));
    });
    /**
    if(localStorage.getItem("notes") === null){
     const storedNotes = localStorage.getItem("notes") || "";
     notesContainer.innerHTML = storedNotes;
     console.log("Retrieved notes from localStorage");
     console.log(localStorage.getItem("notes"));
    } 
    else if(localStorage.getItem("notes")!== null)  {
     notesContainer.innerHTML = localStorage.getItem("notes");
     console.log("Retrieved notes from localStorage code is not null");
     console.log(localStorage.getItem("notes"));
    }
      */
    //potensiel lösning
     //maybe await fetch might work here to retrieve notes from the local storage
     //maybe take away the showNotes () from every function so that it doesn't refresh every time
    // maybe add a new button
 }
var notesContainer;
var createBtn;
var amountOfNotes = 0;
document.addEventListener("DOMContentLoaded", function () {
    notesContainer = document.querySelector(".container");
    createBtn = document.querySelector(".btn");
    createBtn.addEventListener('click', function () {
        amountOfNotes++;
        console.log("new!");
        let inputBox = document.createElement("p");
        inputBox.dataset.noteNr = "Notes-" + amountOfNotes;
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "http://127.0.0.1:5500/images/delete.jpg"; 

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage(inputBox);
    });
    console.log("!");

    notesContainer.addEventListener('click', function(del){
        console.log(del.target.parentElement);
        if(del.target.tagName === "IMG"){
            del.target.parentElement.remove();
            localStorage.removeItem("notes-"+del.target.parentElement.dataset.noteNr);
        }
        if(del.target.tagName === "P"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(par => {
                par.onkeyup = function(){
                    updateStorage(del.target);
                }
            })
        }
    })

    document.addEventListener("keydown", event =>{
        if(event.key === "Enter"){
            document.execCommand("insertLineBreak")
            event.preventDefault();
            //updateStorage();
        }
    })
    
     
  showNotes();
});
