
const menuCelular = document.querySelector('#menu-celular')
const header  = document.querySelector('header ul')
const redesS = document.querySelector(' header #redes-sociais')


menuCelular.addEventListener('click' , () =>{
    
    if(header.style.display === 'none' ){
        menuCelular.setAttribute('src' , 'img/icon-close.png')
        header.style.display = 'flex'
        redesS.style.display = 'block'
    }

    else{
        menuCelular.setAttribute('src' , 'img/icon-hamburger.png')
        header.style.display = 'none' 
    }
})


