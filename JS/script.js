const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(current, e) {
  e.preventDefault();
  current.innerHTML == "Reserve Agora!"
    ? (CTA.innerHTML = "Ooopps!")
    : (CTA.innerHTML = "Reserve Agora!");
  ALERT.classList.toggle("hide");
}

CTA.addEventListener(
  "click",
  (e) => {
    reveal(this, e);
  },
  false
);
