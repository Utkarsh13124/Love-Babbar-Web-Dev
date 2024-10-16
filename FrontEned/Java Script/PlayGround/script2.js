// humare pass ek code hota hi aur hum samajhte hi ki , isse kya hota hi , usse kya hota hi .
// reverse engineering 
// +--> helpful in industry 

// https://codehelp-share-modal.netlify.app/

// 1 : 07 min
// opacity scale display overlap zindex visibility before-after 
//https://drive.google.com/drive/folders/fsiLeNelr2GknNoo3TqJX4aX7w-gygcfs?usp=sharing


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");//changing css by using js
  overlay.classList.add("overlayactive");// overlayactive , we have made a class by that name. 
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
