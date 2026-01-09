const actions = document.querySelectorAll(".action");
const modal = document.querySelector(".modal");

actions.forEach((a) =>
  a.addEventListener("click", (event) => {
    let eTarget = event.target;
    let targetAttribute = eTarget.getAttribute("data-action");

    switch (targetAttribute) {
      case "open":
        modal.toggleAttribute("open");
        modal.classList.add("show");
        setTimeout(() => {
            modal.classList.add("active")
            modal.classList.remove("show");
        }, 250);
        break;
      case "close":
        modal.classList.add("hide");
        setTimeout(() => {
          modal.classList.remove("hide");
          modal.removeAttribute("open");
          modal.classList.remove("active")
        }, 250);
        break;
    }
  })
);
