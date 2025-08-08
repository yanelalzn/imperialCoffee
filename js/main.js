const buttons = document.querySelectorAll('button');
var header = document.getElementById('Header');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>10){
        header.style.backgroundColor = '#000c4bc9'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})