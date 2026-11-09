const themeMode_title = document.querySelector(".themeMode_title");
const btnImgEl = document.querySelector(".theme-btn-img")
const bodyEl = document.querySelector("body");

function toggleMode(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeMode_title.textContent = "DARK";

    }else{
        themeMode_title.textContent="LIGHT"
    };
}
