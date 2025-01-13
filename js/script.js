AOS.init();

function headerControl(){
    let header = document.querySelector('header');

    let lastScrollTop = 0;

    window.addEventListener('scroll', function (event) {

        // mesma posição
        if (event.scrollY === lastScrollTop) return;

        if(this.scrollY < lastScrollTop){
            header.style.opacity = '100%';
            header.style.position = 'fixed';
        }
        else{
            header.style.opacity = '0%';
            header.style.position = 'absolute';
        }

        lastScrollTop = this.scrollY;

    }, true);

}

headerControl();

// Tema dark ou light

const toggleTheme = document.querySelector('#toggletheme');

//Alternar modo light e dark
function changeTheme(){
    let rootHtml = document.documentElement;
    let logo = document.querySelectorAll('.logo');
    let currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'light') {
        sessionStorage.setItem('tema', 'claro');
        rootHtml.setAttribute('data-theme', 'dark');
        for(let i=0;i<logo.length;i++){
            logo[i].src ='img/logo2.png';
        }
        toggleTheme.classList.add('bi-brightness-high-fill');
        toggleTheme.classList.remove('bi-moon-fill');
    } 
    else {
        sessionStorage.setItem('tema', 'escuro');
        rootHtml.setAttribute('data-theme', 'light');
        for(let i=0;i<logo.length;i++){
            logo[i].src ='img/logo1.png';
        }
        toggleTheme.classList.add('bi-moon-fill');
        toggleTheme.classList.remove('bi-brightness-high-fill');
    }
}

toggleTheme.addEventListener('click', changeTheme); //Adicionando evento de click

// Barras com conteúdo

function barras(){
    let barOpen = document.querySelectorAll('.bar-open');
    let barSeta = document.querySelectorAll('.bar-seta');

    for(let i=0;i<barOpen.length;i++){
        barSeta[i].addEventListener('click',function(){
            if(barOpen[i].classList.contains('close')){
                barSeta[i].classList.add('bi-chevron-up')
                barSeta[i].classList.remove('bi-chevron-down')
                barOpen[i].classList.add('open');
                barOpen[i].classList.remove('close');
            }
            else{
                barSeta[i].classList.remove('bi-chevron-up')
                barSeta[i].classList.add('bi-chevron-down')
                barOpen[i].classList.remove('open');
                barOpen[i].classList.add('close');
            }
        });
    }
}

barras();