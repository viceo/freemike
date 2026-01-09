const messages = {
  yes: [
    "Si, deberias liberarlo",
    "Dale chance 🥺",
    "Obvio microbio",
    "Es pecado si no",
    "Ya es hora",
  ],
  no: ["No, puedes llevartelo", "Nel, mejor salgan a cenar"],
};

const selectIndx = (n) => Math.floor(Math.random() * n);
const selectMsg = (x) => x[selectIndx(x.length)];
const today = new Date().getDay();
const validDays = [5, 6, 0];

window.addEventListener("load", async function () {
  const wrapper = document.querySelector("#wrapper");
  const message = document.querySelector("#message");

  wrapper.classList.add(
    validDays.includes(today) ? "you-should" : "you-should",
  );

  const setMsg = () =>
    validDays.includes(today)
      ? (message.innerHTML = selectMsg(messages.yes))
      : (message.innerHTML = selectMsg(messages.yes));

  setMsg();

  document
    .querySelector(".image-container")
    .addEventListener("click", () => setMsg());
  document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.code === "Space") setMsg();
  });
});
