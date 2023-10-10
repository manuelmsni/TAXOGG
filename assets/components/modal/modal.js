class Modal{

    modal;
    close;
    container;

    parentBuffer;

    constructor(){

    }

    init(){
        this.modal = document.getElementById("modal");
        this.close = document.getElementById("close-modal");
        this.container = document.getElementById("modal-content");
        this.close.addEventListener("click", this.closeModal.bind(this));
    }

    loadContent(element){
        this.container.innerHTML = element.innerHTML;
    }

    async closeModal(){

        this.modal.style.opacity = 0;

        await setTimeout(function() {
            this.modal.classList.add("none")
            if(this.parentBuffer == undefined || this.parentBuffer == null){
                this.container.innerHTML = "";
            }
            this.modal.opacity = 1;
        }.bind(this), 500);
        
    }

}

window.Modal = Modal;
session.setModal(modal);
modal.init();