// EFEITO HOVER DOS CARDS DE SERVIÇO
const i = document.querySelectorAll('.icon-box');
const card = document.querySelectorAll('.card-services');


card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        i.forEach((i) => {
            i.style.backgroundColor = 'var(--cor-principal)';
        })
    })
})

card.forEach((card) => {
    card.addEventListener('mouseleave', () => {
        i.forEach((i) => {
            i.style.backgroundColor = 'var(--cor-hover)';
        })
    })
})



// MENU HAMBURGUER
const toggleNButton = document.querySelector('.toggle-button');
const iconMenu = document.querySelector('.fa-bars')
const toggleItens = document.querySelector('.toggle-itens')
const footer = document.getElementsByTagName('footer')

let countClick = 0;


toggleNButton.addEventListener('click', () => {
    if (countClick == 0) {
        iconMenu.classList.replace('fa-bars', 'fa-xmark')
        toggleItens.style.display = 'block';
   
        countClick++;
    } else if (countClick == 1) {
        iconMenu.classList.replace('fa-xmark', 'fa-bars')
        toggleItens.style.opacity = '0';
        toggleItens.style.display = 'none';
        toggleItens.style.opacity = '1';
        countClick = 0;

    }

})

// MODAL POPUP


const modal = document.querySelectorAll('.modal')
const closeModal = document.querySelector('.close-modal')
const modalCardOne = document.querySelector('.modal-1');
const modalCardTwo = document.querySelector('.modal-2');
const modalCardThree = document.querySelector('.modal-3');
const modalCardFour = document.querySelector('.modal-4');


card[0].addEventListener('click', () => {
    modalCardOne.style.display = 'flex'
    modalCardOne.style.opacity = '1';
    modalCardOne.style.zIndex = '999999'
})

card[1].addEventListener('click', () => {
    modalCardTwo.style.display = 'flex'
    modalCardTwo.style.opacity = '1';
    modalCardTwo.style.zIndex = '999999'
})

card[2].addEventListener('click', () => {
    modalCardThree.style.display = 'flex'
    modalCardThree.style.opacity = '1';
    modalCardThree.style.zIndex = '999999'
})

card[3].addEventListener('click', () => {
    modalCardFour.style.display = 'flex'
    modalCardFour.style.opacity = '1';
    modalCardFour.style.zIndex = '999999'
})



function closeModalOne() {
    modal[0].style.opacity = '0';
    setTimeout(() => {

        modal[0].style.zIndex = '-9999'
    }, 100);


}

function closeModalTwo() {
    modal[1].style.opacity = '0';
    setTimeout(() => {

        modal[1].style.zIndex = '-9999'
    }, 100);


}

function closeModalThree() {
    modal[2].style.opacity = '0';
    setTimeout(() => {

        modal[2].style.zIndex = '-9999'
    }, 100);


}

function closeModalFour() {
    modal[3].style.opacity = '0';
    setTimeout(() => {

        modal[3].style.zIndex = '-9999'
    }, 100);


}

