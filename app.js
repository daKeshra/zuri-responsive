const bar = document.getElementById("faBars");
const navList = document.querySelector(".nav-links");
const times = document.getElementById("faTimes");
const navBar = document.getElementById("myTopNav");

bar.addEventListener("click", show);
times.addEventListener("click", close);

function show() {
  navList.style.display = "block";
  times.style.display = "block";
  bar.style.display = "none";
}

function close() {
  navList.style.display = "none";
  times.style.display = "none";
  bar.style.display = "block";
}
