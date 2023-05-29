document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const scoreElement = document.querySelector(".score");
    scoreElement.textContent = `${score}`;
  });
  