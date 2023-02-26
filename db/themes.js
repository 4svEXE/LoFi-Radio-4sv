var themes;

if (radioConfigs.getItem("themes")) {
  themes = radioConfigs.getItem("themes");
} else {
  getThemes()
}

function getThemes() {
  themes = [
    {
      "--text-color": "#000",
      "--main-bg-color": "#fff",
      "--nav-bg-color": "#ccc",
      "--border-bg-color": "#000",
      "--active-bg-color": "rgb(255, 242, 0)",
      "--controlss-bg-color": "#f2ecf3",
    },
    {
      "--text-color": "#000",
      "--main-bg-color": "#fff",
      "--nav-bg-color": "#9cc",
      "--border-bg-color": "#0f0",
      "--active-bg-color": "rgb(5, 242, 0)",
      "--controlss-bg-color": "#cfc",
    },
    {
      "--text-color": "#693D3D",
      "--main-bg-color": "#fff",
      "--nav-bg-color": "#693D3D",
      "--border-bg-color": "#BA5536",
      "--active-bg-color": "A43820",
      "--controlss-bg-color": "#cfc",
    },
    {
      "--text-color": "#C60000",
      "--main-bg-color": "#FEF2E4",
      "--nav-bg-color": "#C60000",
      "--border-bg-color": "#805A3B",
      "--active-bg-color": "FD974F",
      "--controlss-bg-color": "#cfc",
    },
    {
      "--text-color": "#003B46",
      "--main-bg-color": "#C4DFE6",
      "--nav-bg-color": "#003B46",
      "--border-bg-color": "#07575B",
      "--active-bg-color": "#66A5AD",
      "--controlss-bg-color": "#66A5AD",
    },
    {
      "--text-color": "#003B46",
      "--main-bg-color": "#FFCCBB",
      "--nav-bg-color": "#6EB5C0",
      "--border-bg-color": "#4f8160",
      "--active-bg-color": "#E2E8E4",
      "--controlss-bg-color": "#bfbfbf",
    },
    {
      "--text-color": "#000",
      "--main-bg-color": "#68829E",
      "--nav-bg-color": "#505160",
      "--border-bg-color": "#505160",
      "--active-bg-color": "#AEBD38",
      "--controlss-bg-color": "#AEBD38",
    },
    {
      "--text-color": "#0F1B07",
      "--main-bg-color": "#C4DFE6",
      "--nav-bg-color": "#5C821A",
      "--border-bg-color": "#5C821A",
      "--active-bg-color": "#FFFFFF",
      "--controlss-bg-color": "#C6D166",
    },

    {
      "--text-color": "#000",
      "--main-bg-color": "#68829E",
      "--nav-bg-color": "#505160",
      "--border-bg-color": "#505160",
      "--active-bg-color": "#AEBD38",
      "--controlss-bg-color": "#AEBD38",
    },
    {
      "--text-color": "#0F1B07",
      "--main-bg-color": "#C4DFE6",
      "--nav-bg-color": "#5C821A",
      "--border-bg-color": "#5C821A",
      "--active-bg-color": "#FFFFFF",
      "--controlss-bg-color": "#C6D166",
    },
  ];

  radioConfigs.setItem("themes", themes);
}