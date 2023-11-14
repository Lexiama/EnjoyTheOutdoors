let searchType = document.querySelector("#searchType");
let locationSelect = document.querySelector("#location");
let searchInput = document.querySelector("#searchInput");
let searchForm = document.querySelector(".search");
let parksContainer = document.querySelector(".parksContainer");

// loop through locations array and put in locations select input
locationsArray.forEach((location) => {
  locationSelect.innerHTML += `<option value='${location}'>${location}</option>`;
});

// adding event listener so that when we change the search type, js will know
// and we can hide and show the locations select input
searchType.addEventListener("change", () => {
  if (searchType.value === "location") {
    locationSelect.style.display = "inline";
  } else {
    locationSelect.style.display = "none";
  }
});

locationSelect.addEventListener("change", () => {
  const filteredParks = nationalParksArray.filter((park) =>
    park.State.includes(locationSelect.value)
  );

  for (let i = 0; i < filteredParks.length; i++) {
    const park = filteredParks[i];
    parksContainer.innerHTML = `
        <div class="parkCard">
           <h3>Location Name: ${park.LocationName}</h3> 
           <p>Address: ${park.Address}</p>
           <p>City: ${park.City}</p>
           <p>State: ${park.State}</p>
           <p>Type: ${park.Location.type}</p>
        </div>
    `;
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reloading of form
  const type = searchType.value;
  const input = searchInput.value;

  console.log(type, input);
});

console.log(nationalParksArray);
