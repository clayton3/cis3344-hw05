function slideShowContent(){
    var content = `
        <h2>Slide Show Page</h2>
    `;

    var ele = document.createElement("div");
    ele.classList.add("slideShow")
    ele.innerHTML = content;

    return ele;
}