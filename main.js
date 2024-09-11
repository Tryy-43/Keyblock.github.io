const btn = document.querySelector("#btn-dropdown");
const list = document.querySelector("#dropdown");
const allBtn = document.querySelectorAll(".btn-nav");
var conut = 0;
btn.addEventListener("click", () => {
  list.classList.toggle("h-0");
  list.classList.toggle("h-[250px]");
  list.classList.toggle("opacity-100");
  list.classList.toggle("opacity-0");
});
allBtn.forEach((e) => {
  e.addEventListener("click", () => {
    list.classList.toggle("h-0");
    list.classList.toggle("h-[250px]");
  });
});
console.log(allBtn);
