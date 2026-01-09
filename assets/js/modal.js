const actions = document.querySelectorAll(".action");
const modal = document.querySelector(".modal");

actions.forEach((a) =>
  a.addEventListener("click", (event) => {
    let eTarget = event.target;
    let targetAttribute = eTarget.getAttribute("data-action");

    switch (targetAttribute) {
      case "open":
        modal.toggleAttribute("open");
        break;
      case "close":
        modal.removeAttribute("open");
        break;
    }
  })
);
