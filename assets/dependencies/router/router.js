class Router{

    current;

    constructor(){
    }

    init(){
        this.current = session.paramManager.getParams();
        const countParams = Object.entries(this.current).length;
        if (countParams <= 0) {
            session.goTo('home');
            this.setCurrent(session.paramManager.getParams());
        }
    }

    setCurrent(params){
        this.current = params;
    }

    async route(params){

        
    }

}

window.Router = Router;
session.setRouter(new Router());