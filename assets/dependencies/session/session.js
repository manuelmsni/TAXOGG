class Session{
    
    body;
    session;
    langNames;
    key;
    menu;
    loaded;
    paramManager;
    preloader;
    router;
    
    constructor(){
    }

    //  --- Initialize ---

    async init(){
        await this.initPreloader();
        await this.initParamManager();
        await this.initRouter();
        await this.initMenu();
        this.preloader.close();
    }

    async initPreloader(){
        await loadComponent("app", "preloader");
    }

    async initParamManager(){
        await loadDependence('paramManager');
    }

    async initRouter(){
        await loadDependence('router');
    }

    async initMenu(){
        await loadComponent("app", "menu");
    }

    goTo(view){
        this.paramManager.setParam("window", view);
    }

    // --- Getters / Setters ---

    getRouter(){
        return this.router;
    }
    
    setRouter(r){
        this.router = r;
        r.init();
    }

    getParamManager(){
        return this.paramManager;
    }

    setParamManager(pm){
        this.paramManager = pm;
        pm.init();
    }

    getPreloader(){
        return this.preloader;
    }

    setPreloader(p){
        this.preloader = p;
        p.init();
    }

    getMenu(){
        return this.menu;
    }

    setMenu(m){
        this.menu = m;
        m.init();
    }

    getKey(){
        return this.key;
    }

    setKey(k){
        this.key = k;
        k.init();
    }

}

window.Session = Session;
session = new Session();
session.init();
