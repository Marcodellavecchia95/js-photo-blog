const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;
const imageGroupEl = document.getElementById("image-group");

axios.get(apiUri).then((response) => {
  let imageArray = response.data;
  console.log(imageArray[0].url);
  for (const image of imageArray) {
    imageGroupEl.innerHTML += `<img src="${image.url}" alt=""/>`;
  }
});
