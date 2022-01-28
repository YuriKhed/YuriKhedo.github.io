function f(id, num) {
  let el = document.getElementById(id);
  el.scrollIntoView();
  document.getElementById("i" + num).style.color = "red"
  for (let i = 1; i < 6; i++) {
    if (i !== num) {
      document.getElementById("i" + i).style.color = "white"
    }
  }
}

const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");

const about = document.querySelector(".about");
const home = document.querySelector(".home");
const price = document.querySelector(".price");




link.forEach(el => {
  el.addEventListener('click', function () {
    let attr = el.getAttribute("language");

    home.textContent = data[attr].home;
    about.textContent = data[attr].about;
    price.textContent = data[attr].price;
  });
});


let data = {
  'armenian': {
    "home": "Գլխավոր",
    "about": "մեր մասին",
  },
  'english': {
    "home": "Home",
    "about": "About us",
  },
  'russian': {
    "home": "Главная",
    "about": "О нас",
  }
}