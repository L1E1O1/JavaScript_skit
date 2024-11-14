async function getHTML(url) {
    const parser = new DOMParser();
    const response = await fetch(url);
    const html = parser.parseFromString(await response.text(), 'text/html');
    
    return html;
}

document.addEventListener("DOMContentLoaded", async function() {
    const data = await getHTML("https://www.gp.se");

    const teaserTitles = data.querySelectorAll("h2.teaser-title");
    const teaserLeads = data.querySelectorAll("span.teaser-lead");
    const teaserImages = data.querySelectorAll("img.teaser-image");
    const containerDiv = document.querySelector(".container");
    //console.log(teaserTitles[0].innerText);
    //console.log("https://www.gp.se" + teaserImages[1].getAttribute("src"));
    
    //[...teaserTitles].slice(0, 3)
    [...teaserTitles].slice(0, 3).forEach((title, index) => {
        const h2 = document.createElement("h2");
        h2.innerText = title.innerText;
        
        const p = document.createElement("p");
        p.innerText = teaserLeads[index] ? teaserLeads[index].innerText : '';

        const img = document.createElement("img");
        const imgURL = teaserImages[index] ? "https://www.gp.se" + teaserImages[index].getAttribute("src") : "";
        img.src = imgURL;

        if (imgURL) {
            containerDiv.appendChild(img);
        }
        containerDiv.appendChild(h2);
        containerDiv.appendChild(p);
    });

    console.log(data);
});