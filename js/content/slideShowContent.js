function slideShowContent(){
    const content = `
        <h2>Slide Show Page</h2>
    `;

    const slideShowContainer = document.createElement("div");

    ajax("json/.json", processCatList, document.getElementById("content"));
    function processCatList(catList){
        for(var i = 0; i < catList.length; i++)
            catList[i].caption = catList[i].nickname;

        console.log(catList[0].pic + " | " + catList[0].caption);
        var ss = MakeSlideShow(catList, "slideShow");
        content.appendChild(ss);
    }

    const ele = document.createElement("div");
    ele.innerHTML = content;
    ele.appendChild(slideShowContainer)

    return ele;
}