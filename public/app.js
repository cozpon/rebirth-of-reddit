//jshint esversion: 6

console.log("Sanity Check, REDDIT YO");
let dankArray = []; // storage for Reddit info
let wrapperDiv = document.getElementById("wrapper");

//
let query = {
  url: "https://www.reddit.com/r/dankmemes.json",
  method: "GET"
};

// Get API from URL
function retrieveAPI(query, callBack) {
  query = query || {}; // argument validation
  query.method = query.method || "GET";
  let apiRequest = new XMLHttpRequest();
  apiRequest.addEventListener("load", requestListener());
  apiRequest.open(query.method, query.url);
  apiRequest.send();
}


retrieveAPI(query, function(event){
  console.log(event);
  console.log(this);
});

// DATA PARSE + storing into
function requestListener() {
  return function() {
    let parsedDocument = JSON.parse(this.responseText).data;
    dankArray = parsedDocument;
    makeDivs(dankArray);
  };
}

//subreddit is just name of subreddit
function buildSubreddit(subreddit){
  //variables
  let query = { url: `http://www.reddit.com/r/${subreddit}.json`
   };
   let parent = document.getElementById("container");
   let response = JSON.parse(this.responseText);
   let posts = response.data.children;
   //get subreddit data
  request(query, function(){
    //find or create parent dom

  });
}


function makeDivs(array){
  for (let i = 0; i < 6; i++){
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
    imagePreview.src = array.children[i].data.url;
    titleDiv.innerHTML = array.children[i].data.title;
    statsDiv.innerHTML = "by " + array.children[i].data.author + " | " +
                      new Date(array.children[i].data.created * 1000) + " | " +
                      array.children[i].data.score + " likes, " +
                      array.children[i].data.num_comments + " comments";

    // ORGANIZING Data in DIVS in DOM
    wrapperDiv.appendChild(innerWrapper);
    innerWrapper.appendChild(imagePreview);
    innerWrapper.appendChild(titleDiv);
    innerWrapper.appendChild(statsDiv);
  }
}


// retrieveAPI("https://www.reddit.com/r/dankmemes.json");




// titles under images



// author of post




// date it was posted




// view count





// snippet of text/body of post





