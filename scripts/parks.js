"use strict";

window.onload = () => {
  let searchSelect = document.querySelector("#searchSelect");
  let locationSelect = document.querySelector("#location");
  let parkTypeSelect = document.querySelector("#park-type");
  let parksContainer = document.querySelector(".parksContainer");

  // hide "choose park type select"
  parkTypeSelect.style.display = "none";

  locationsArray.forEach((location) => {
    locationSelect.innerHTML += `<option value="${location}">${location}</option>`;
  });

  parkTypesArray.forEach((parkType) => {
    parkTypeSelect.innerHTML += `<option value="${parkType}">${parkType}</option>`;
  });

  searchSelect.addEventListener("change", searchSelectOnChange);

  locationSelect.addEventListener("change", locationSelectOnchange);

  parkTypeSelect.addEventListener("change", parkTypeSelectOnchange);

  function searchSelectOnChange() {
    if (searchSelect.value === "location") {
      locationSelect.style.display = "inline-block";
      parkTypeSelect.style.display = "none";
    } else {
      // hide and showing the location
      locationSelect.style.display = "none";
      parkTypeSelect.style.display = "inline-block";
    }
  }

  function locationSelectOnchange() {
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
  }

  function parkTypeSelectOnchange() {
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
  }
};
