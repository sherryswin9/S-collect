/* const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  overlay.classList.toggle("hidden");
});

// my variant
const back = function () {
  search.classList.remove("active");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", back);
 */

// from other code editor

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// Click outside to hide bar
document.addEventListener("click", (e) => {
  if (e.target.nodeName === "BODY") {
    search.classList.remove("active");
  }
});

// Submit function on button
search.addEventListener("submit", (e) => {
  e.preventDefault();
  input.value && console.log("submit", input.value);
});
