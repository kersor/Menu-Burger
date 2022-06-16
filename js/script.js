const mobileDevice = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return (
            mobileDevice.Android() || mobileDevice.BlackBerry() || mobileDevice.IOS() ||
            mobileDevice.Opera()|| mobileDevice.Windows()
        );
    }
}



if(mobileDevice.any()){
    document.body.classList.toggle('_tablet');
}
else{
    document.body.classList.toggle('_pc');
}



const menuBurger = document.querySelector('.menu__icon');

if(menuBurger){
    const menuBody = document.querySelector('.menu__body');
    const headerLogo = document.querySelector('.header__logo');
    menuBurger.addEventListener('click', function(e){
        menuBody.classList.toggle('_active');
        headerLogo.classList.toggle('_active__logo');
        menuBurger.classList.toggle('_active');
    });
}