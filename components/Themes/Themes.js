function setCssVar(variable, property) {
  let root = document.documentElement;
  root.style.setProperty(variable, property);
}

function addThemes() {
  $(".content-page.p-themes").innerText = "";
  themes.forEach((theme, i) => {
    let active = "";
    if (radioConfigs.themeId == i) active = "active";
    let item = `
          <div class="theme-button-container sv-flex">
            <div 
              class="theme-button ${active}"
              style="background: ${theme["--nav-bg-color"]}"
            >

             
              
            </div>

            
            <div class="theme-delete-button sv-flex">+</div>
          </div>
        `;

    $(".content-page.p-themes").insertAdjacentHTML("beforeend", item);
  });

  // render the clicked theme
  $$(".theme-button").forEach((theme, i) => {
    theme.addEventListener("click", () => {
      renderTheme(i);
      radioConfigs.setItem("themeId", i);
      $(".content-page.p-themes").innerText = "";
      addThemes();
    });
  });

  //delete the theme

  $$(".theme-delete-button").forEach((button, id) => {
    button.addEventListener("click", async () => {
      try {
        if (await openModal("Delete", "Are you sure you want to delete?")) {
          themes.splice(id, 1);
          radioConfigs.setItem("themes", themes);

          renderTheme(0);
          addThemes();
        }
      } catch (err) {
        console.log(err);
      }
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
