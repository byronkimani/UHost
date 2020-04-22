const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.choose');
const modal = document.querySelector('.modal');
const cancelSelectionBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');



const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const addModal = () => {
    modal.classList.add('visible');
};

const removeModal = () => {
    if(modal){
        modal.classList.remove('visible');
    }
};

const selectBtnHandler = () => {
    toggleBackdrop();
    addModal();
};

const cancelModalHandler = () => {
    removeModal();
    removeMobileNav();
    toggleBackdrop();
};

const addMobileNav = () => { 
    mobileNav.classList.add('visible');
    console.dir(mobileNav);
    toggleBackdrop();
};

const removeMobileNav = () => { 
    mobileNav.classList.remove('visible');
};


selectPlanButtons.forEach(item => {
    item.addEventListener('click', selectBtnHandler);
});
backdrop.addEventListener('click', cancelModalHandler);
if (cancelSelectionBtn){
    cancelSelectionBtn.addEventListener('click', cancelModalHandler);
}
toggleBtn.addEventListener('click', addMobileNav);