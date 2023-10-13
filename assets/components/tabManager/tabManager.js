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

class Slider{
    
    slider;
    isMoving = false;
    xStartPosition;
    scrollLeft;

    constructor(sliderElement){
        this.slider = sliderElement;
        this.addListeners(this.slider);
    }

     // Slider effect
    end = async () => {
        this.slider.classList.remove('moving');
        this.isMoving = false;
    }

    start = (e) => {
        this.isMoving = true;
        this.slider.classList.add('moving');
        this.xStartPosition = e.pageX || e.touches[0].pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;	
    }

    move = (e) => {
        if(!this.isMoving) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - this.slider.offsetLeft;
        const dist = (x - this.xStartPosition);
        this.slider.scrollLeft = this.scrollLeft - dist;
    }

    addListeners(){
        this.slider.addEventListener('mousedown', this.start);
        this.slider.addEventListener('touchstart', this.start);
    
        this.slider.addEventListener('mousemove', this.move);
        this.slider.addEventListener('touchmove', this.move);
    
        this.slider.addEventListener('mouseleave', this.end);
        this.slider.addEventListener('mouseup', this.end);
        this.slider.addEventListener('touchend', this.end);
    }
}

class TabManager extends Slider{

    tabList;

    constructor(){
        super(document.getElementById("TabList"));
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