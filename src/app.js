const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceGen = document.querySelector(".change-advice");
const spinner = document.querySelector(".spinner-container");

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const adviceData = await response.json();
      const { id, advice } = adviceData.slip;

      adviceId.classList.remove("d-none");
      adviceText.classList.remove("d-none");
      spinner.classList.add("d-none");

      adviceId.textContent = `Advice #${id}`;
      adviceText.textContent = advice;
    }
  } catch (err) {
    console.error("The server is not responding", err);
  }
};

window.addEventListener("load", fetchAdvice);

adviceGen.addEventListener("click", () => {
  fetchAdvice();

  adviceId.classList.add("d-none");
  adviceText.classList.add("d-none");
  spinner.classList.remove("d-none");
});
