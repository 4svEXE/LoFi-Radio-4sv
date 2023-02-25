setInterval(() => {
  let storage = JSON.parse(localStorage.getItem(APP_NAME));

  if (storage.play === 'true'){
    $(".radio").play();
  } else {
    $(".radio").pause();
    $(".radio").src = storage.url;
  }
  $(".radio").volume = storage.volume;
  
}, 100);
