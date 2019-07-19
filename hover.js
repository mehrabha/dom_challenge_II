const hover_area = document.querySelector(".hover");
const p = hover_area.children[0];

hover_area.addEventListener("mouseover", () => {
  p.textContent = "AAAAAAAAHHHHHHHHHHH";
  alert("Hey, I told you not to hover over me!");
});

hover_area.addEventListener("mouseleave", () => {
  p.textContent = "Please don't do that again. >:^(";
  setTimeout(() => {
    p.textContent = "Please do not hover over me!";
  }, 3000);
});