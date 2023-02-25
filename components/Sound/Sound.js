let sound = $("#sound");

let s_button = "sound/button.mp3";
let s_swipe_on = "sound/swipe-on.mp3";
let s_swipe_off = "sound/swipe.mp3";
let s_click = "sound/click.mp3";

function playSound(src) {
  sound.src = src;
  sound.play();
}

$$(".controls").forEach((item) => {
  item.addEventListener("click", () => {
    playSound(s_button);
  });
});

// Nav Bar buttons sounds
let swiped = false;
$$(".nav-bar-button").forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      playSound(s_swipe_on);
      swiped = true;
    } else {
      playSound(s_click);
    }
  });
});

$("#back-to-controls").addEventListener("click", () => {
  if (swiped) {
    playSound(s_swipe_off);
    swiped = false;
  }
});

$("#sounds").addEventListener("click", () => {
  playSound(s_swipe_off);
});

function reloadRenderedSounds(className, sound) {
  setTimeout(() => {
    $$(className).forEach((theme) => {
      theme.addEventListener("click", () => {
        playSound(sound);
        reloadRenderedSounds(className, sound);
      });
    });
  }, 100);
}

reloadRenderedSounds(".theme", s_click);
reloadRenderedSounds(".station", s_click);
