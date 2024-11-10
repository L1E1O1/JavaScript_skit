
for (let i = 1; i < 11; i++) {
    let para = document.createElement("p");
    para.innerText = "det här är paragraf nummer" +i;
    document.getElementById("paragraf").append(para);
}