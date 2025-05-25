const btn = document.querySelector(".read-more");
const moreText = document.querySelector(".more-text");

btn.addEventListener("click", () => {
  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
});
