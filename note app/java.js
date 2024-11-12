document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.querySelector(".container");
    const createBtn = document.querySelector(".btn");
//function showNotes(){
  //  notesContainer.innerHTML = localStorage.getItem("notes")
//}
//showNotes();

 

    createBtn.addEventListener('click', function () {
        let inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        let img = document.createElement("img");
        img.src = "/note%20app/images/delete.jpg"; 

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
    });

    notesContainer.addEventListener('click', function(del){
        if(del.target.tagName === "IMG"){
            del.target.parentElement.remove();
            updateStorage();
        }
        else if(del.target.tagName === "p"){
            notes = document.querySelectorAll(".input-box");
            notes.foreach(par => {
                par.onkeyup = function(){
                    updateStorage();
                }
            })
        }
    })

    document.addEventListener("keydown", event =>{
        if(event.key === "Enter"){
            document.execCommand("inserLineBreak");
            event.preventDefault();
        }
    })
    function updateStorage(){
        localStorage.setItem("notes", notesContainer.innerHTML);
    }
});
