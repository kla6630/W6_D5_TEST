/* Ci ho provato in 1000 modi ma non ha mai funzionato! */


let currentTheme = localStorage.getItem("theme") || "light";


const themeSwitchBtn = document.getElementById("theme-switch-btn");


themeSwitchBtn.addEventListener("click", switchTheme);

function switchTheme() {
  if (currentTheme === "light") {
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    currentTheme = "light";
    localStorage.setItem("theme", "light");
  }
 
  switch-theme();
}


if (currentTheme === "dark") {
    switchTheme();
}

