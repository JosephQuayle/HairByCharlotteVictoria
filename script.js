//onclick of the right arrow button
//change current images, to some new images stored in array
//onclick of the left arrow button
//change current images to previous set of images

//getting button and gallery elements
let rightButton = document.getElementById("rightArrow");
rightButton.addEventListener("click", nextImgSet);

let leftButton = document.getElementById("leftArrow");
leftButton.addEventListener("click", prevImgSet);

let galleryImages = document.getElementsByClassName("gallery-image");

//have image sets
//when right arrow pressed - counter + 1
//when left arrow pressed - counter - 1
//each counter number is equal to a set of images to display

//set1 images
let imageCharlotte = new Image();
imageCharlotte.src = "images/charlotte.jpg";

//set2 images
let set2Img1 = new Image();
set2Img1.src = "images/bald.jpeg";
let set2Img2 = new Image();
set2Img2.src = "images/hand.jpg";
let set2Img3 = new Image();
set2Img3.src = "images/bloat.jpg";
let set2Img4 = new Image();
set2Img4.src = "images/jazz.jpg";
let set2Img5 = new Image();
set2Img5.src = "images/IBP.png";
let set2Img6 = new Image();
set2Img6.src = "images/guardian.jpg";

//set 1 array
let set1 = [
  imageCharlotte,
  imageCharlotte,
  imageCharlotte,
  imageCharlotte,
  imageCharlotte,
  imageCharlotte,
];

//set 2 array
let set2 = [set2Img1, set2Img2, set2Img3, set2Img4, set2Img5, set2Img6];

//sets images to default first set
let counter = 1;

function updateGallery() {
  if (counter === 1) {
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].src = set1[i].src;
    }
  } else if (counter === 2) {
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].src = set2[i].src;
    }
  }
}

let setAmount = [set1, set2];

function nextImgSet() {
  //   if (counter === setAmount.length) {
  //     counter -= 1; //stops counter going up when there are no more sets to display
  //     console.log(counter);
  //   }
  if (counter === setAmount.length) {
    counter = 0;
    console.log(counter);
  }
  counter += 1;
  console.log(counter);

  updateGallery();
}

function prevImgSet() {
  if (counter === 1) {
    //stops counter going down when there are no previous sets to display
    counter += 1;
  }
  counter -= 1;
  updateGallery();
}

// Initialize the gallery with the first set of images
updateGallery();
