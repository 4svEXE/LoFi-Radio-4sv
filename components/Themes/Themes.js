function setCssVar(variable, property) {
  let root = document.documentElement;
  root.style.setProperty(variable, property);
}

function addThemes() {
  themes.forEach((theme, i) => {
    let active = "";
    if (radioConfigs.themeId == i) active = "active";
    let item = `
            <button 
            class="theme ${active}"
            style="background: ${theme["--nav-bg-color"]}"
            </button>
        `;
    $(".content-page.p-themes").insertAdjacentHTML("beforeend", item);
  });

  document.querySelectorAll(".theme").forEach((theme, i) => {
    theme.addEventListener("click", () => {
      renderTheme(i);
      radioConfigs.setItem("themeId", i);
      $(".content-page.p-themes").innerHTML = "";
      addThemes();
    });
  });
}
addThemes();

function renderTheme(id) {
  for (const key in themes[id]) {
    if (Object.hasOwnProperty.call(themes[id], key)) {
      const element = themes[id][key];
      setCssVar(key, element);
    }
  }
}
renderTheme(radioConfigs.themeId);