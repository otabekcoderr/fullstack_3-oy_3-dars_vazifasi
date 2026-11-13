const themeMode_title = document.querySelector(".themeMode_title");
const btnEl = document.querySelector(".theme-btn");
const btnImgEl = document.querySelector(".theme-btn-img");
const bodyEl = document.querySelector("body");
const mapIconEl = document.querySelector(".map");
const linkIconEl = document.querySelector(".link-icon-png");
const twitterIconEl = document.querySelector(".twitter");
const officeIconEl = document.querySelector(".office");

function toggleMode(themeMode) {
  if (themeMode == "light") {
    document.body.classList.add("light-mode");
    themeMode_title.textContent = "DARK";
    btnImgEl.src = `
      ./image/light-mode-icon.svg`;
    mapIconEl.src = "./image/lightMode-map-icon.svg";
    linkIconEl.src = "./image/lightMode-link-icon.svg";
    twitterIconEl.src = "./image/lightMode-twitter-icon.svg";
    officeIconEl.src = "./image/lightMode-office-icon.svg";
  } else {
    document.body.classList.remove("light-mode");
    themeMode_title.textContent = "LIGHT";
    btnImgEl.src = `./image/002-sun.svg`;

    mapIconEl.src = "./image/map-icon.svg";
    linkIconEl.src = "./image/link-icon.svg";
    twitterIconEl.src = "./image/twitter-icon.svg";
    officeIconEl.src = "./image/office-icon.svg";
  }``
}

let chooseTheme = localStorage.getItem("theme") || "dark";
toggleMode(chooseTheme);

btnEl.addEventListener("click", () => {
  chooseTheme = chooseTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", chooseTheme);
  toggleMode(chooseTheme);
});

// Netlify havolasi
// https://stirring-lebkuchen-64fcc6.netlify.app/