document.addEventListener("DOMContentLoaded", () => {
  const dotsElement = document.getElementById("dots");
  const dots = ["", ".", "..", "..."];
  let index = 0;

  setInterval(() => {
    dotsElement.textContent = dots[index];
    index = (index + 1) % dots.length;
  }, 500);
});
