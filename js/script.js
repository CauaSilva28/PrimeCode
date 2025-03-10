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
const toggleThemeMobile = document.querySelector('#togglethemeMobile');

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
        toggleThemeMobile.classList.add('bi-brightness-high-fill');
        toggleThemeMobile.classList.remove('bi-moon-fill');
    } 
    else {
        sessionStorage.setItem('tema', 'escuro');
        rootHtml.setAttribute('data-theme', 'light');
        for(let i=0;i<logo.length;i++){
            logo[i].src ='img/logo1.png';
        }
        toggleTheme.classList.add('bi-moon-fill');
        toggleTheme.classList.remove('bi-brightness-high-fill');
        toggleThemeMobile.classList.add('bi-moon-fill');
        toggleThemeMobile.classList.remove('bi-brightness-high-fill');
    }
}

toggleTheme.addEventListener('click', changeTheme); //Adicionando evento de click
toggleThemeMobile.addEventListener('click', changeTheme); //Adicionando evento de click

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

// Nav Mobile

function NavMobile(){
    let controlNavMobile = document.getElementById('controlNavMobile');
    let navBarMobile = document.getElementById('navbarMobile');

    controlNavMobile.addEventListener('click', function(){
        if(controlNavMobile.classList.contains('bi-list')){
            navBarMobile.style.display = 'flex';
            controlNavMobile.classList.add('bi-x-lg');
            controlNavMobile.classList.remove('bi-list');
        }
        else{
            navBarMobile.style.display = 'none';
            controlNavMobile.classList.remove('bi-x-lg');
            controlNavMobile.classList.add('bi-list');
        }
    });

    window.addEventListener('resize', function() { // Adiciona eventos de acordo com o tamanho da tela
        if (window.innerWidth > 800) { // Ajusta os elementos quando a tela for MAIOR que 900px
            navBarMobile.style.display = 'none';
            controlNavMobile.classList.remove('bi-x-lg');
            controlNavMobile.classList.add('bi-list');
        }
    });
}

NavMobile();