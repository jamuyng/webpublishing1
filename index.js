const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");
$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
});
