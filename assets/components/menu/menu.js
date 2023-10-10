class Menu {
  active;

  constructor(){
  }
  
  init(){
    this.initLangSelector();
  }

  initLangSelector(){
    const languajes = Array.from(langs.keys());
  
    const selector = document.getElementById("lang-selector");
    for (let i = 0; i < languajes.length; i++){

      const lng = languajes[i];
      const lngName = langNames.get(lng);

      var option = document.createElement("option");
      option.value = lng;
      option.text = lng.toUpperCase();
      option.title = lngName;
      selector.appendChild(option);
      
      /*
      var nametag = document.createElement("a");
      nametag.classList.add("lang-name");
      nametag.text = " - " + lngName;
      option.appendChild(nametag);
      */
    }
    selector.addEventListener("change", function() {
      setLang(selector.value);
    });
  }

}

window.Menu = Menu;
session.setMenu(new Menu);
