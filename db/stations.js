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
      image: "img/stations/01.gif",
      url: "https://stream-27.zeno.fm/0r0xa792kwzuv?zs=6aokNGKPRSuD8bxc0o2AvQ",
      favorite: true,
    },
    {
      title: "Dash Radio - Lofi",
      image: "img/stations/02.gif",
      url: "https://radio.sutekihost.com:8020/radio.mp3",
      favorite: false,
    },
    {
      title: "Lofi 24/7",
      image: "img/stations/03.gif",
      url: "https://ice55.securenetsystems.net/DASH25",
      favorite: false,
    },
    {
      title: "Lofi Panda Radio",
      image: "img/stations/04.gif",
      url: "https://stream-51.zeno.fm/umhxwwtke0hvv?zs=wQI6mF7ISGqidJ1e4eUSXA",
      favorite: false,
    },
    {
      title: "Relaxxx",
      image: "img/stations/05.gif",
      url:
        "https://radio4.vip-radios.fm:18027/stream-128kmp3-YogaChill",
      favorite: false,
    },
    {
      title: "MIKONOS LOUNGE",
      image: "img/stations/06.gif",
      url: "https://strw1.openstream.co/896",
      favorite: false,
    },
    {
      title: "EPIC CLASSICAL",
      image: "img/stations/07.gif",
      url:
        "https://stream.epic-classical.com/classical-hotel-lounge?ref=radiode",
      favorite: false,
    },
    {
      title: "Limelounge FM",
      image: "img/stations/08.gif",
      url:
        "https://limeloungefm.stream.laut.fm/limeloungefm?ref=radiode&t302=2023-03-14_22-02-09&uuid=64f1b0b3-35d9-446b-a63f-56e8ee664af1",
      favorite: false,
    },
    {
      title: "Best Lounge",
      image: "img/stations/09.gif",
      url:
        "https://best-lounge.stream.laut.fm/best-lounge?ref=radiode&t302=2023-03-14_22-03-51&uuid=fdb545c2-d4b8-4f97-95ee-e6842cd8a597 ",
      favorite: false,
    },
    {
      title: "CHILL LOUNGE",
      image: "img/stations/10.gif",
      url: "https://giorgia.radiobellissima.it:8270/radio.mp3",
      favorite: false,
    },
    {
      title: "Super Relax FM",
      image: "img/stations/11.gif",
      url: "https://streams.radio.menu/listen/super-relax-fm/radio.mp3",
      favorite: false,
    },
    {
      title: "kawaii-music",
      image: "img/stations/12.gif",
      url:
        "https://kawaii-music.stream.laut.fm/kawaii-music?ref=radiode&t302=2023-03-14_22-09-12&uuid=ab9862de-dd40-4080-ac65-87f5cea0bdd2",
      favorite: false,
    },
    {
      title: "Race FM",
      image: "img/stations/13.gif",
      url:
        "https://racefm.stream.laut.fm/racefm?ref=radiode&t302=2023-03-14_22-47-41&uuid=d7267a86-5d35-48a4-8f13-91374f171d8c",
      favorite: false,
    },
    {
      title: "Gamespoint",
      image: "img/stations/14.gif",
      url:
        "https://radio-gamespoint.stream.laut.fm/radio-gamespoint?ref=radiode&t302=2023-03-17_12-56-03&uuid=6a917f10-9c8c-46bd-aa82-c407cfe43db4",
      favorite: false,
    },
    {
      title: "Score-radio",
      image: "img/stations/15.gif",
      url:
        "https://score-radio.stream.laut.fm/score-radio?ref=radiode&t302=2023-03-17_12-54-24&uuid=b609fb08-3737-4595-84dc-337f6180e06a",
      favorite: false,
    },
  ];

  radioConfigs.setItem("stations", stations);
}
