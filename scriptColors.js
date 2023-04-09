window.addEventListener("load", (event) => {
  console.log("Window reload");
  localStorage.clear();
});
const chosenColor = document.querySelector(".chosen-color");
const table = document.querySelector("table");
const nameArticle = document.querySelector(".name-article");
const price = document.querySelector(".price span");
const prazna = document.querySelector(".prazna");

colors.addEventListener("click", (e) => {
  chosenColor.style.color = "#555";
  chosenColor.textContent = `Боја:${e.target.getAttribute("data-color")}`;
});
kupi.addEventListener("click", function (e) {
  e.preventDefault();

  let articleArr = [];
  let cena = price.textContent;
  console.log(cena);
  let boja = chosenColor.textContent;
  let name = nameArticle.textContent;
  let article = { name: name, boja: boja, cena: cena };

  if (localStorage.getItem("articleArr")) {
    console.log("zdravo");
    articleArr = JSON.parse(localStorage.getItem("articleArr"));
    console.log(articleArr);
    articleArr.push(article);
    console.log(articleArr);
    localStorage.setItem("articleArr", JSON.stringify(articleArr));
    console.log(articleArr);
    prikaziVoKosnica(articleArr);
    alert("Во кошничка е додаден избраниот производ");
  } else {
    articleArr.push(article);
    localStorage.setItem("articleArr", JSON.stringify(articleArr));
    articleArr = JSON.parse(localStorage.getItem("articleArr"));
    console.log(articleArr);
    prikaziVoKosnica(articleArr);
    alert("Во кошничка е додаден избраниот производ");
  }
});
function prikaziVoKosnica(articleArr) {
  prazna.innerHTML = "";
  let html = ``;
  let total = 0;
  table.innerHTML = "";
  articleArr.forEach((a, i) => {
    html += `<tr><td>${i + 1}</td><td>${a.name}</td><td>${a.boja}</td><td>${
      a.cena
    }</td></tr>`;
    total = total + Number(a.cena);
  });
  html = `<thead>
  <tr>
    <th>Реден број</th>
    <th>Име</th>
    <th>Колор</th>
    <th>Цена</th>
  </tr>
</thead>
    ${html} 
    <tbody>
    <tr>
  <th>Вкупно:</th>
  <th></th>
  <th></th>
  <th>${total}</th>
</tr> </tbody>`;
  table.insertAdjacentHTML("afterbegin", html);
}
const otkazi = document.querySelector(".otkazi");
otkazi.addEventListener("click", (e) => {
  e.preventDefault();
  prazna.innerHTML = "Кошничката е празна!";
  localStorage.clear();
  table.innerHTML = "";
  kosnicka.style.maxWidth = null;
});
