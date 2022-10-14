document.getElementById('getButton').addEventListener('click', function(event)

 {
  event.preventDefault();
  // get form values
  let text_cat = document.getElementById('text_cat').value;
  let url = "https://cataas.com/cat";
  
 console.log(text_cat);
  if (text_cat !== ""){
      url += "/says/" + text_cat;
  }

  updateImage(url);
}



);

function updateImage(url) {
  //debugger
  document.getElementById('photo_cat').src = url;
}

