const btnShare = document.querySelector('.btn-share');
const sharePanel = document.querySelector('.icons');
const pannelBottom = document.querySelector('.panel-bottom');
const userImage = document.querySelector('.image-user');
const aboutUser = document.querySelector('.about-user');

function addClass (element, classname){
    element.classList.add(classname);
}

function removeClass (element, classname){
    element.classList.remove(classname);
}

btnShare.addEventListener('click', ()=> {
    btnShare.classList.toggle('active');
    if(btnShare.classList.contains('active')){
        removeClass(sharePanel,'hide');
        addClass(pannelBottom,'activeBottom');
        addClass(userImage,'hide-data');
        addClass(aboutUser,'hide-data');
    } else {
        addClass(sharePanel,'hide');
        removeClass(pannelBottom,'activeBottom');
        removeClass(userImage,'hide-data');
        removeClass(aboutUser,'hide-data');
    }
});