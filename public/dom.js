const request = (url, cb) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    });
};
const modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const inputSearch = document.getElementById("search");
const info = document.getElementById("info");
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", e => {
  e.preventDefault();

  request(`/search?name=${inputSearch.value}`, data => {
    data.forEach(element => {
      const place = document.createElement("div");
      place.setAttribute("class", "placeDiv");
      const img = document.createElement("img");
      img.setAttribute("class", "img");
      img.src = element.photo;
      const cityName = document.createElement("h4");
      cityName.setAttribute("class", "cityName");
      cityName.innerText = element.cityname;
      const placeName = document.createElement("h2");
      placeName.setAttribute("class", "placeName");
      placeName.innerText = element.placename;
      const sort = document.createElement("h4");
      sort.setAttribute("class", "sort");
      sort.innerText = element.sort;
      const description = document.createElement("article");
      description.setAttribute("class", "description");
      description.innerText = element.description;

      place.appendChild(img);
      place.appendChild(placeName);
      place.appendChild(cityName);
      place.appendChild(sort);
      place.appendChild(description);
      info.appendChild(place);
    });
  });
});