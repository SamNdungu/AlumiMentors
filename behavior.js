document.addEventListener("DOMContentLoaded", function(event) {
    // alert('Hello!');
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        // write here
        // alert("I saw you click!");
        if (thumbnailElement.className == "small") {
            // write here the code that will execute if the image is big
            thumbnailElement.className = "";
        }  else {
            thumbnailElement.className = "small"; 
        }    
      });
});