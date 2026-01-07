async function main() {
  const please = document.querySelector("#please");
  const pjson = await fetch("/please.json");
  const pdata = await pjson.json();

  const pdiv = document.createElement("div");
  for (p of pdata.please) {
    pdiv.innerHTML += `<div class="petition">
      <p>${p.when}</p>
      <div class="petitioners">
        ${p.petitioners.map((x) => `${x}`)}
      </div>
    </div>`;
  }

  please.appendChild(pdiv);
}

main();
