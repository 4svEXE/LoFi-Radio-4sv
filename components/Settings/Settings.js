$("#sounds").addEventListener("click", () => {
  if ($("#sounds").checked) {
    $("#sound").volume = radioConfigs.getItem("volume");
    radioConfigs.setItem("soundsVolume", $("#sound").volume);
  } else {
    $("#sound").volume = 0;
    radioConfigs.setItem("soundsVolume", 0);
  }
});

$("#sound").volume = radioConfigs.getItem("soundsVolume");
$("#sounds").checked = !!radioConfigs.getItem("soundsVolume");

$("#roll-back-sennings").addEventListener("click", () => {
  localStorage.removeItem(APP_NAME);

  localStorageConfigs = {
    url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=6aokNGKPRSuD8bxc0o2AvQ",
    stationId: 0,
    volume: 0.8,
    themeId: 0,
    play: false,
    soundsVolume: 0.8,
  };

  let radioConfigs = new LocalStorageItem(localStorageConfigs);

  radioConfigs.save();

  getThemes();
  addThemes();
  renderTheme(0);
  
  reloadRenderedSounds(".theme-button", s_click);
});
