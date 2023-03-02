console.log("here");
const btn = document.querySelector("#openModal");
const show = document.querySelector("#modal");
// select button element
btn.addEventListener("click", () => {show.classList.remove("invisible")});
// add event listener on click to button
// remove class invisible from div modal
show.addEventListener("click", () => {show.classList.add("invisible")});
// add event listener on key press Escape
// add class invisible to div modal
