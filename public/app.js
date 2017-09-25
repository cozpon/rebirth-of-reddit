//jsint esversion:6
console.log("Sanity Check, REDDIT YO");

// grabAPI("https://www.reddit.com/r/PrequelMemes.json");


// function reqListener () {
//   return function() {
//     let parsedDocument = JSON.parse(this.responseText);
//     console.log(parsedDocument);
//     return parsedDocument;
//   };     //"this" refers to the instance, the "oReq.responseText"
// }


// function grabAPI(url){
//   let apiRequest = new XMLHttpRequest();
//   apiRequest.addEventListener("load", reqListener());
//   apiRequest.open("GET", url);
//   apiRequest.send();
// }
let apiRequest = new XMLHttpRequest();
apiRequest.addEventListener("load", function(){
  let parsedDocument = JSON.parse(this.responseText);


  console.log(parsedDocument.data.children["0"].data.author);
  document.getElementById("redditTitle").innerHTML = parsedDocument.data.children["0"].data.author;

});

apiRequest.open("GET", "https://www.reddit.com/r/PrequelMemes.json");
apiRequest.send();
