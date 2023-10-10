class Menu {

  active;

  selector;
  burger;
  buttons;

  constructor(){
  }
  
  init(){
    this.selector = document.getElementById("lang-selector");
    this.burger = document.getElementById("menu-burguer");
    this.buttons = document.getElementById("menu-buttons");
    this.initLangSelector();
    this.initBurger();
  }

  initLangSelector(){
    const languajes = Array.from(langs.keys());

    languajes.forEach(languaje => {
      const lngName = langNames.get(languaje);

      var option = document.createElement("option");
      option.value = languaje;
      option.text = languaje.toUpperCase();
      option.title = lngName;
      this.selector.appendChild(option);
    });

    this.selector.addEventListener("change", function() {
      setLang(this.selector.value);
    }.bind(this));
  }

  initBurger() {
    this.burger.addEventListener("click", function() {
        session.getModal().swapContent(this.buttons);
    }.bind(this));
  }

}

window.Menu = Menu;
session.setMenu(new Menu);
