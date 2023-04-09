const kupi = document.querySelector(".kupi");
console.log(kupi);
const cart = document.querySelector(".cart");
const kosnicka = document.querySelector(".kosnicka");
const close = document.querySelector(".close");
const colors = document.querySelector(".colors");

cart.addEventListener("click", function (e) {
  e.preventDefault();
  //   if (localStorage.getItem("articleArr")) {
  //     let articleArr = JSON.parse(localStorage.getItem("articleArr"));
  //     prikaziVoKosnica(articleArr);
  //   }

  let kosnickaWidth = kosnicka.scrollWidth;
  console.log(kosnickaWidth);
  if (kosnicka.style.maxWidth) {
    kosnicka.style.maxWidth = null;
  } else {
    console.log("zdravo");
    kosnicka.style.maxWidth = "500px";
    kosnicka.classList.add("rasiri");
  }
});
close.addEventListener("click", function (e) {
  kosnicka.style.maxWidth = null;
  // let kosnickaWidth = kosnicka.scrollWidth;
  // console.log(kosnickaWidth);
  // if (kosnicka.style.maxWidth) {
  //   kosnicka.style.maxWidth = null;
  // } else {

  //   kosnicka.style.maxWidth = "400px";
  //   kosnicka.classList.add("rasiri");
  // }
});
