let cat = {
  currentSkin: 1,
  skinsPath: {
    sleep: "./img/cat/cat-sleep.gif",
    walk: "./img/cat/cat-walk.gif",
    fall: "./img/cat/cat-fall.gif",
    eat: "./img/cat/cat-eat.gif",
    nia: "./img/cat/cat-nia.gif",
    dance: "./img/cat/cat-dance.gif",
    playing: "./img/cat/cat-playing.gif",
  },
  skins: ["sleep", "walk", "fall", "eat", "nia", "dance", "playing"],
};

function setNextSkin() {
  if (cat.currentSkin >= cat.skins.length) cat.currentSkin = 0;

  $("#cat").src = `./img/cat/cat-${cat.skins[cat.currentSkin]}.gif`;

  //sounds for the cat
  $("#cat").addEventListener("mouseover", () => {
    playSound(`./sound/cat/${cat.currentSkin}.mp3`);
  });

  cat.currentSkin++
}
setNextSkin();

$("#cat").addEventListener("click", function () {
  setNextSkin();
});