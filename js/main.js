// DICHIARAZIONE VARIABILI
const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;
const imageGroupEl = document.getElementById("image-group");
const colGeneratorEl = document.getElementById("col-generator");
const overlayEl = document.querySelector(".overlay");

// CHIAMATA AJAX ALL'API
axios.get(apiUri).then((response) => {
  const imageArray = response.data;
  console.log(imageArray[0].url);

  // ITERO L'ARRAY DI OGGETTI USANDO UN FOR OF, GENERANDO UNA CARD PER OGNI OGETTO
  for (const image of imageArray) {
    colGeneratorEl.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card" style="width: 20rem">
            <img class="pin-image" src="./img/pin.svg" alt="">
              <img src="${image.url}" class="card-img-top p-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${image.title}</h5>
                <p class="card-text">
                 ${image.date}
                </p>
              </div>
            </div>
          </div>`;
  }

  // DICHIARO IN UNA VARIABILE LE CARTE GENERATE
  const generatedCards = document.querySelectorAll(".card");

  // GENERO PER OGNI CLICK L'HTML NECESSARIO A CREARE UN'ANTEPRIMA CON UN BOTTONE PER TORNARE INDIETRO
  generatedCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardImage = card.querySelector(".card-img-top");
      console.log(cardImage);
      overlayEl.classList.remove("d-none");
      overlayEl.innerHTML = ` <button id="button" class="btn btn-danger mb-5">CHIUDI</button>
                                <img src="${cardImage.src}"  alt="..." />`;

      const buttonEL = document.getElementById("button");
      buttonEL.addEventListener("click", () => {
        overlayEl.classList.add("d-none");
      });
    });
  });
});
