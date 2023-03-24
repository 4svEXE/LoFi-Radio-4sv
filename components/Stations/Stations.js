function addStations() {
  $(".content-page.p-stations").innerText = "";

  stations.forEach((station, i) => {
    let active = "";
    let icon = "play";

    if (radioConfigs.stationId == i) {
      active = "active";
      icon = "pause";
    }

    //if station is favorite then add to this ststion class active
    let activeFav = station.favorite ? "active" : "";

    let stationHTML = `
      <div class="station-wrapper sv-flex ${active}">
          <div class="station sv-flex" 
            tooltip${(i + 1) % 3 == 0 ? "-left": ""}="${station.title}"
          >
            <img src="${station.image}_.jpg" class="logo-station">
            <img src="img/controls/${icon}.png" class="play-station"/>
            <img src="img/controls/fav.png" class="fav-icon ${activeFav}"/>
          </div>
      </div>
      `;

    $(".content-page.p-stations").insertAdjacentHTML("beforeend", stationHTML);
  });

  // play radioststion on click
  $$(".station-wrapper").forEach((station, stationID) => {
    station.addEventListener("click", () => {
      renderStation(stationID); //function from controls.js
      currentStation = stationID;
      addStations();
    });
  });
}
addStations();

//reload the stations in Stations page on click the station button in the nav
$("#p-stations").addEventListener("click", () => addStations());
