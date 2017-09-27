//jshint esversion: 6

console.log("Sanity Check, REDDIT YO");
let dankArray = []; // storage for Reddit info
// parent daddio
let wrapperDiv = document.getElementById("wrapper");

//
let query = {
  url: "https://www.reddit.com/r/dankmemes.json",
  method: "GET"
};

retrieveAPI(query, function(event){
  console.log(event);
  console.log(this);
});


// Get API from URL
function retrieveAPI(query, callBack) {
  console.log(query);
  query = query || {}; // argument validation
  query.method = query.method || "GET";
  let apiRequest = new XMLHttpRequest();
  apiRequest.addEventListener("load", requestListener());
  apiRequest.open(query.method, query.url);
  apiRequest.send();

}

// DATA PARSE + storing into
function requestListener() {
  return function() {
    let parsedDocument = JSON.parse(this.responseText).data.children;
    dankArray = parsedDocument;
    makeDivs(dankArray);
  };
}


let randomButton = document.getElementById('random');
randomButton.addEventListener('click', function() {
  console.log("click");
  buildSubreddit('PrequelMemes');
});

let myBoards = document.getElementById("myboards");
myBoards.addEventListener("click", function(){
  buildSubreddit('SurrealMemes');
});

//subreddit is just name of subreddit
function buildSubreddit(subreddit){
  //variables
  let query = { url :`http://www.reddit.com/r/${subreddit}.json`
   };
  retrieveAPI(query);
}





function makeDivs(array){
  wrapperDiv.innerHTML = "";
  for (let i = 0; i < array.length; i++){
    // creating DIVS for DOM attachment.
    let innerWrapper = document.createElement("DIV");
    let imagePreview = document.createElement("IMG");
    let titleDiv = document.createElement("DIV");
    let statsDiv = document.createElement("DIV");

    // creating CLASS
    innerWrapper.className = "innerWrapper";
    titleDiv.className = "titleDiv";
    imagePreview.className = "imageDiv";

    // appending REDDIT data to DOM
    imagePreview.src = array[i].data.url;
    titleDiv.innerHTML = array[i].data.title;
    statsDiv.innerHTML = "by " + array[i].data.author + " | " +
                      new Date(array[i].data.created * 1000) + " | " +
                      array[i].data.score + " likes, " +
                      array[i].data.num_comments + " comments";

    // ORGANIZING Data in DIVS in DOM
    innerWrapper.appendChild(imagePreview);
    innerWrapper.appendChild(titleDiv);
    innerWrapper.appendChild(statsDiv);
    wrapperDiv.appendChild(innerWrapper);
  }
}




