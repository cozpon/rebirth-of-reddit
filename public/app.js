//jshint esversion: 6

console.log("Sanity Check, REDDIT YO");

let dankArray = [];
let wrapperDiv = document.getElementById("wrapper");



// images from reddit

function retrieveAPI(url) {
  let apiRequest = new XMLHttpRequest();

  apiRequest.addEventListener("load", requestListener());
  apiRequest.open("GET", url);
  apiRequest.send();
}



function requestListener() {
  return function() {
    let parsedDocument = JSON.parse(this.responseText).data;
    dankArray = parsedDocument;
    console.log(dankArray);
    makeDivs(dankArray);
  };
}



function makeDivs(array){
  for (let i = 0; i < 6; i++){
    let innerWrapper = document.createElement("DIV");
    let imagePreview = document.createElement("IMG");
    let titleDiv = document.createElement("DIV");
    let statsDiv = document.createElement("DIV");

    innerWrapper.className = "innerWrapper";
    titleDiv.className = "titleDiv";
    imagePreview.className = "imageDiv";

    imagePreview.src = array.children[i].data.url;
    titleDiv.innerHTML = array.children[i].data.title;
    statsDiv.innerHTML = "by " + array.children[i].data.author + " | " +
                      new Date(array.children[i].data.created * 1000) + " | " +
                      array.children[i].data.score + " likes, " +
                      array.children[i].data.num_comments + " comments";

    wrapperDiv.appendChild(innerWrapper);
    innerWrapper.appendChild(imagePreview);
    innerWrapper.appendChild(titleDiv);
    innerWrapper.appendChild(statsDiv);
  }
}


retrieveAPI("https://www.reddit.com/r/dankmemes.json");




// titles under images



// author of post




// date it was posted




// view count





// snippet of text/body of post





