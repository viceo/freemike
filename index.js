async function main() {
  const please = document.querySelector("#please");
  const pjson = await fetch("/please.json");
  const pdata = await pjson.json();

  const pdiv = document.createElement("div");
  for (p of pdata.please) {
    pdiv.innerHTML += `<div class="petition">
      <div class="entry">
        <p>${p.when}</p>
        <p>${p.game}</p>
        <p>${p.reason}</p>
      </div>
      <div class="petitioners">
        ${p.petitioners.map((x) => `<img src="/img/steam-${x}.jpg" />`)}
      </div>
    </div>`;
  }

  please.appendChild(pdiv);
}

main();
