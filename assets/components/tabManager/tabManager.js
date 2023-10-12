class Tab{

    tabList;
    tab;
    title;

    constructor(title){
        this.tabList = session.tabManager.tabList;
        this.title = title;
        this.init();
    }

    init(){
        this.tabList.insertAdjacentHTML("beforeend", `<div class="tab"><p>${this.title}</p><a class="closeTab">x</a></div>`);
        this.tab = this.tabList.lastChild;
        this.setActive();
        this.tab.addEventListener("click", function(e){
            if (e.target.classList.contains("closeTab") || this.tab.classList.contains("active")) return;
            this.setActive();
        }.bind(this));
        this.tab.getElementsByClassName("closeTab")[0].addEventListener("click", function(e){
            this.close();
        }.bind(this));
    }

    setActive(){
        var activeElements = this.tabList.getElementsByClassName("active");
        if(activeElements.length > 0) activeElements[0].classList.remove("active");
        this.tab.classList.add("active");
    }

    close(){
        session.tabManager.tabList.removeChild(this.tab);
        var activeElements = this.tabList.getElementsByClassName("active");
        if(activeElements.length == 0){
            var lastChild = this.tabList.lastChild;
            if(!(lastChild.toString() == "[object Text]")) lastChild.classList.add("active");
        }
    }

}

class TabManager{

    tabList;

    constructor(){
        this.tabList = document.getElementById("TabList");
    }
    
    init(){

    }

    initTab(title){
        new Tab(title);
    }
}

window.TabManager = TabManager;
session.setTabManager(new TabManager);
session.tabManager.initTab("Pestaña 1");
session.tabManager.initTab("Pestaña 2");
session.tabManager.initTab("Pestaña 3");
session.tabManager.initTab("Pestaña 4");