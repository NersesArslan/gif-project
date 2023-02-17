const img = document.querySelector("img");
const btn = document.querySelector(".btn");
const search = document.getElementById("searchbar");
const searchBtn = document.querySelector(".search-btn");
const header = document.querySelector(".header");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=b5LZUE46hKzixUvHplGLzBCzRwkde2xh&s=ryangosling",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  })
  .catch((error) => {
    console.error("Error", error);
    document.body.textContent = "Error " + error;
  });

btn.addEventListener("click", (e) => {});

searchBtn.addEventListener("click", (e) => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=b5LZUE46hKzixUvHplGLzBCzRwkde2xh&s=" +
      `${search.value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.error("Error", error);
    });
  header.textContent = `${search.value}`;
  search.value = null;
});
