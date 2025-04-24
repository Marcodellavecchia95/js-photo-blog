const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;
const imageGroupEl = document.getElementById("image-group");
const colGeneratorEl = document.getElementById("col-generator");
axios.get(apiUri).then((response) => {
  const imageArray = response.data;
  console.log(imageArray[0].url);
  for (const image of imageArray) {
    colGeneratorEl.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card" style="width: 20rem">
            <img class="pin-image" src="./img/pin.svg" alt="">
              <img src="${image.url}" class="card-img-top p-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>`;
  }
});
