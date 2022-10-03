//In order to use this function you must provide an array of list objects containing a "pic" and a "caption" along with
//an identifier for the style you want to use.
function MakeSlideShow (picCapList, style) {
    for(var i = 0; i < picCapList.length; i++) {
        if (!picCapList[i].pic || !picCapList[i].caption) {
            throw ("MakeSlideShow expects an array of objects having the 'pic' and 'caption' properties.");
        }
    }

    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    div.append(document.createElement("br"));

    var mySpan = document.createElement("span");
    mySpan.classList.add("captionStyle");
    div.append(mySpan);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picCapList[picNum].pic;
        mySpan.innerHTML = picCapList[picNum].caption;
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picCapList.length-1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picCapList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };

    return slideShow;
}