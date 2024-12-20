async function loadFile(file) {

    const response = await fetch(file);
    const data = await response.json();
    return data;
    
}


document.addEventListener("DOMContentLoaded", async function() {

    const data = await loadFile("data.json");

    const thunbnail = document.getElementById("bilder");
    const largbild = document.getElementById("stor-bild");


    data.forEach(function(item) {

        const smallpic = document.createElement("img");

        smallpic.src = item.smallPic;
        console.log(smallpic);
        smallpic.addEventListener("click", function() {
            largbild.src = item.bigPic;
        });

        thunbnail.append(smallpic);

        
    });

   
})