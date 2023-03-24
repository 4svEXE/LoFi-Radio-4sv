var stations;

if (radioConfigs.getItem("stations")) {
  stations = radioConfigs.getItem("stations");
} else {
  getStations();
}

function getStations() {
  stations = [
    {
      title: "Lofi 4 You",
      image: "img/stations/2.gif",
      url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=6aokNGKPRSuD8bxc0o2AvQ",
      favorite: true,
    },
    {
      title: "Dash Radio - Lofi",
      image: "img/stations/1.gif",
      url: "https://radio.sutekihost.com:8020/radio.mp3",
      favorite: false,
    },
    {
      title: "Lofi 24/7",
      image: "img/stations/0.gif",
      url: "https://ice55.securenetsystems.net/DASH25",
      favorite: false,
    },
    {
      title: "Lofi Panda Radio",
      image: "img/stations/3.gif",
      url: "https://stream-51.zeno.fm/umhxwwtke0hvv?zs=wQI6mF7ISGqidJ1e4eUSXA",
      favorite: false,
    },
    {
      title: "Lofi Hip Hop Radio",
      image: "img/stations/8.gif",
      url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=gU-lUn9eSFGuk0ORU1JEvA",
      favorite: false,
    },
    {
      title: "Radio Otaku",
      image: "img/stations/6.gif",
      url: "https://streaming.radio.co/s8267e5edc/listen",
      favorite: false,
    },

    {
      title: "test Radio",
      image: "img/stations/8.gif",
      url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=gU-lUn9eSFGuk0ORU1JEvA",
      favorite: false,
    },
    {
      title: "test Otaku",
      image: "img/stations/6.gif",
      url: "https://streaming.radio.co/s8267e5edc/listen",
      favorite: true,
    },
  ];

  radioConfigs.setItem("stations", stations);
}
