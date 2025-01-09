AOS.init();

function headerControl(){
    let header = document.querySelector("header");

    let lastScrollTop = 0;

    window.addEventListener('scroll', function (event) {

        // mesma posição
        if (event.scrollY === lastScrollTop) return;

        if(this.scrollY < lastScrollTop){
            header.style.opacity = "100%";
            header.style.position = "fixed";
        }
        else{
            header.style.opacity = "0%";
            header.style.position = "absolute";
        }

        lastScrollTop = this.scrollY;

    }, true);

}

headerControl();