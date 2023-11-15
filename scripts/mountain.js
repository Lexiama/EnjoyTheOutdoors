const mountainsSelect = document.getElementById("mountains");
const mountainContainer = document.querySelector(".mountainContainer");

// looping through mountains array and put in mountains select input
mountainsArray.forEach((mountain) => {
  mountainsSelect.innerHTML += `<option value='${mountain.name}'>${mountain.name}</option>`;
});

mountainsSelect.addEventListener("change", () => {
  const value = mountainsSelect.value;
  const mountain = mountainsArray.find((mt) => mt.name === value);
  console.log(mountain);

  mountainContainer.innerHTML = `
  <div class="parkCard">                               
     <p>Mountain Name: ${mountain.name}</p> 
     <p>Description: ${mountain.description}</p>
     <p>Elevation: ${mountain.elevation}</p>
     <img src='../images/${mountain.img}' alt="mountain" />
  </div>
`;
});
