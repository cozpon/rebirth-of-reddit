//jshint esversion: 6

console.log("Sanity Check, REDDIT YO");



// DOM connecting Functions (should go in separate tab)
function titlesList(input){
  let x = document.createElement("DIV");
  let t = document.createTextNode(input);
  x.appendChild(t);
  document.getElementById("redditTitle").appendChild(x);
}
function authorList(input){
  let x = document.createElement("DIV");
  let t = document.createTextNode(input);
  x.appendChild(t);
  document.getElementById("redditAuthor").appendChild(x);
}
function imageList(input){
  let x = document.createElement("img");
  document.getElementById("redditTitle").appendChild(x);
}


// images from reddit


let apiRequest = new XMLHttpRequest();
apiRequest.addEventListener("load", function(){
  let parsedDocument = JSON.parse(this.responseText).data;
  let images = "";

    for(let i = 0; i < parsedDocument.children.length; i++){
    // console.log(parsedDocument.children[i].data.url);
      titlesList(parsedDocument.children[i].data.title);
      titlesList(parsedDocument.children[i].data.author);
      imageList(images);

      images += '<img src="' + parsedDocument.children[i].data.url + '" />';
     }

      document.getElementById("redditAuthor").innerHTML = images;
});

apiRequest.open("GET", "https://www.reddit.com/r/PrequelMemes.json");
apiRequest.send();



// titles under images



// author of post




// date it was posted




// view count





// snippet of text/body of post














