$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__button").toggleClass("header__button--hide")
        $(".header__links").toggleClass("header__links--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--last")
    })

})

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.header__button');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('header__button--active'));
          btn.classList.add('header__button--active');
        });
 
    });

});
document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.main__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('main__btn--active'));
          btn.classList.add('main__btn--active');
        });
 
    });

});

$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").toggleClass("popup--hide")
    })
        
    $(".main__btn").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__background").click(function(){
        $(".popup").addClass("popup--hide")
    })
})