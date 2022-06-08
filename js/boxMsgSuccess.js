const msgSendSucess = document.querySelector('.msg-contact-send')
const msgSendErr = document.querySelector('.msg-contact-Err')
const submitButton = document.querySelector('.submit-button')
const form = document.getElementsByTagName('form')

const tutor = document.querySelector('#tutor')
const pet = document.querySelector('#pet')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const animal = document.querySelector('#animal')
const dia = document.querySelector('#dia')
const horario = document.querySelector('#horario')
const termo = document.querySelector('#termo')


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    
        if (tutor.value && pet.value && email.value && telefone.value && animal.value && dia.value && horario.value && termo.checked ) {
            e.preventDefault()
            form[0].style.display = 'none';
            msgSendSucess.style.display = 'block'
            msgSendErr.style.display = 'none'
            window.scroll(0, 0)
        } else {
            msgSendErr.style.display = 'block'
            window.scroll(0, 0)
        }


})
