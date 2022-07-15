function stop() {
  document.querySelector("#red").classList.remove("opacity");
  document.querySelector("#orange").classList.add("opacity");
  document.querySelector("#green").classList.add("opacity");
}

function atention() {
  document.querySelector("#red").classList.add("opacity");
  document.querySelector("#orange").classList.remove("opacity");
  document.querySelector("#green").classList.add("opacity");
}

function follow() {
  document.querySelector("#red").classList.add("opacity");
  document.querySelector("#orange").classList.add("opacity");
  document.querySelector("#green").classList.remove("opacity");
}
