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
        img.src = "/noteapp/images/delete.jpg";   

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        console.log(localStorage.getItem(note));
    });
 
 }
var notesContainer;
var createBtn;
var amountOfNotes = 0;
document.addEventListener("DOMContentLoaded", function () {
    notesContainer = document.querySelector(".container");
    createBtn = document.querySelector(".btn");
    createBtn.addEventListener('click', function () {
        amountOfNotes++;

        let inputBox = document.createElement("p");
        inputBox.dataset.noteNr = "Notes-" + amountOfNotes;
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "/noteapp/images/delete.jpg";  

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage(inputBox);
    });


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
    /**
 * potentiall solutions 
 * array to sort array of notes based on the last modification date????????
 * interface to store notes in a more secure way and easy way to retrieve them and delete them????????
 */
     
  showNotes();
});


