let localStorageConfigs = {
  url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=6aokNGKPRSuD8bxc0o2AvQ",
  stationId: 0,
  volume: 0.8,
  themeId: 0,
  play: false,
  soundsVolume: 0.8,
  animations: true
};

let radioConfigs = new LocalStorageItem(localStorageConfigs);

if (localStorage.getItem(APP_NAME)) {
  radioConfigs.load();
} else {
  radioConfigs.save();
}

setInterval(() => {
  if (localStorage.getItem(APP_NAME + "Play") === "true") {
    $('#loader').classList.remove('active');
  } 
}, 100);
