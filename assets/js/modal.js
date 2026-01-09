const actions = document.querySelectorAll(".action");
const modal = document.querySelector(".modal");
const body = document.querySelector("body")

actions.forEach((a) =>
  a.addEventListener("click", (event) => {
    let eTarget = event.target;
    let targetAttribute = eTarget.getAttribute("data-action");

    switch (targetAttribute) {
      case "open":
        body.style = "hidden";
        modal.toggleAttribute("open");
        modal.classList.add("show");
        setTimeout(() => {
          modal.classList.add("active");
          modal.classList.remove("show");
        }, 250);
        break;
      case "close":
        body.style = "initial";
        modal.classList.add("hide");
        setTimeout(() => {
          modal.classList.remove("hide");
          modal.removeAttribute("open");
          modal.classList.remove("active");
        }, 250);
        break;
    }
  })
);

document.addEventListener("click", (event) => {
  let eTarget = event.target;

  if (eTarget.classList.contains("modal")) {
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("hide");
      modal.removeAttribute("open");
      modal.classList.remove("active");
    }, 250);
  }
});
