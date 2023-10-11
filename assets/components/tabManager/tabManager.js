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
        this.tab.addEventListener("click", function(){
            this.setActive();
        }.bind(this));
        this.tab.getElementsByClassName("closeTab")[0].addEventListener("click", function(){
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
            console.log(lastChild);
            lastChild.classList.add("active");
        }
    }

}

class TabManager{

    tabList;

    constructor(){
        this.tabList = document.getElementById("TabList");
        console.log(this.tabList);
    }
    
    init(){

    }

    initTab(title){
        new Tab(title);
    }
}

window.TabManager = TabManager;
session.setTabManager(new TabManager);