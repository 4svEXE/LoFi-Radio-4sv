function addStations() {
  $(".content-page.p-stations").innerHTML = "";

  stations.forEach((station, i) => {
    let active = "";
    let icon = "play";
    if (radioConfigs.stationId == i) {
      active = "active";
      icon = "pause";
    }
    let item = `
      <div class="station-wrapper sv-flex ${active}">
          <div class="station sv-flex" tooltip="${station.title}">
              <img src="${station.image}" class="logo-station">
              <img src="img/controls/${icon}.png" class="play-station"/>
          </div>
      </div>
      `;
    $(".content-page.p-stations").insertAdjacentHTML("beforeend", item);
  });

  // play radioststion on click
  $$(".station-wrapper").forEach((station, i) => {
    station.addEventListener("click", () => {
      currentStation = i;
      renderStation(currentStation);
      addStations();
    });
  });
}
addStations();

//reload the stations in Stations page on click the station button in the nav
$("#p-stations").addEventListener("click", () => addStations());
