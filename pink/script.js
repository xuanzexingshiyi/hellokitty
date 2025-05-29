document.getElementById("kitty").addEventListener("click", () => {
  const kitty = document.getElementById("kitty");
  kitty.style.transform = "scale(1.1)";
  setTimeout(() => {
    kitty.style.transform = "scale(1)";
    alert("你好呀，我是 Hello Kitty！");
  }, 300);
});

document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
