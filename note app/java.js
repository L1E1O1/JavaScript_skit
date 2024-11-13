document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.querySelector(".container");
    const createBtn = document.querySelector(".btn");


function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
    console.log("Storage updated");
}

    createBtn.addEventListener('click', function () {
        let inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "/note%20app/images/delete.jpg"; 

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage();
        showNotes();
    });

    notesContainer.addEventListener('click', function(del){
        if(del.target.tagName === "IMG"){
            del.target.parentElement.remove();
            updateStorage();
            showNotes();
        }
        else if(del.target.tagName === "P"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(par => {
                par.onkeyup = function(){
                    updateStorage();
                    showNotes();
                }
            })
        }
    })

    document.addEventListener("keydown", event =>{
        if(event.key === "Enter"){
            document.execCommand("insertLineBreak")
            event.preventDefault();
            updateStorage();
            showNotes();
        }
    })
    function showNotes() {
  
       if(localStorage.getItem("notes") === null){
        const storedNotes = localStorage.getItem("notes") || "";
        notesContainer.innerHTML = storedNotes;
        console.log("Retrieved notes from localStorage");
       } 
       else if(localStorage.getItem("notes")!== null)  {
        notesContainer.innerHTML = localStorage.getItem("notes");
        console.log("Retrieved notes from localStorage");
       }
        //maybe await fetch might work here to retrieve notes from the local storage
    }
    
    showNotes();
});
