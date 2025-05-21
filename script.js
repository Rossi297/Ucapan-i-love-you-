function showLove() {
  const message = document.getElementById("message");
  message.innerText = "Aku sayang banget sama kamu!";
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}