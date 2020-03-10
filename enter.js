function EnterFood(){
  //change the picture
    fadeOutAndNavigate('page2.html');
  }

function EnterDrink(){
  fadeOutAndNavigate('page3.html');
}

function EnterHome(){
  fadeOutAndNavigate('index.html');
}

function fadeOutAndNavigate(destinationURL) {
  /* NOTE:
   Passes url into function, fades, then navigates to new URL after 2000ms */

  var mainContainerElement = document.getElementById('mainContainer');
  console.log(mainContainerElement);
  mainContainerElement.style.opacity = 0.0;
  setTimeout(function(){
    location.href = destinationURL;
  }, 2000);

}
