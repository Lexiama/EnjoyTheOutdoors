"use strict";

let searchType = document.querySelector("#searchType");
let locationSelect = document.querySelector("#location");
let parkTypeSelect = document.querySelector("#park-type");
let parksContainer = document.querySelector(".parksContainer");

// hide park type select input
parkTypeSelect.style.display = "none";

// looping through locations array and put in locations select input
locationsArray.forEach((location) => {
  locationSelect.innerHTML += `<option value='${location}'>${location}</option>`;
});

// looping through parkTypesArray and put in park type select input
parkTypesArray.forEach((parkType) => {
  parkTypeSelect.innerHTML += `<option value='${parkType}'>${parkType}</option>`;
});

// adding event listener so that when I can change the search type, js will know
// and I can hide and show the locations select input
searchType.addEventListener("change", () => {
  if (searchType.value === "location") {
    locationSelect.style.display = "inline-block";
    parkTypeSelect.style.display = "none";
  } else {
    // hide and showing the location
    locationSelect.style.display = "none";
    parkTypeSelect.style.display = "inline-block";
  }
});

locationSelect.addEventListener("change", () => {
  parksContainer.innerHTML = "";
  const filteredParks = nationalParksArray.filter((park) =>
    park.State.includes(locationSelect.value)
  );

  for (let i = 0; i < filteredParks.length; i++) {
    const park = filteredParks[i];

    parksContainer.innerHTML += `
        <div class="parkCard">                               
           <p>Location Name: ${park.LocationName}</p> 
           <p>Address: ${park.Address}</p>
           <p>City: ${park.City}</p>
           <p>State: ${park.State}</p>
           <p>Type: ${park.Location.type}</p>
        </div>
    `;
  } // the back ticks are helping me because the "" wont work
});

parkTypeSelect.addEventListener("change", () => {
  parksContainer.innerHTML = "";
  const filteredParks = nationalParksArray.filter((park) =>
    park.LocationName.includes(parkTypeSelect.value)
  );

  for (let i = 0; i < filteredParks.length; i++) {
    const park = filteredParks[i];

    parksContainer.innerHTML += `
        <div class="parkCard">                               
           <p>Location Name: ${park.LocationName}</p> 
           <p>Address: ${park.Address}</p>
           <p>City: ${park.City}</p>
           <p>State: ${park.State}</p>
           <p>Type: ${park.Location.type}</p>
        </div>
    `;
  }
});
