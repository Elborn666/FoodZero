const backdrop = document.querySelector('.backdrop__subscribe')
const body = document.querySelector('body')
const subscribeForm = document.querySelector('.contact__form')
const buttonCloseModal = document.querySelector('.modal__button-subscribe')


buttonCloseModal.addEventListener('click', onBtnClose)
subscribeForm.addEventListener('submit', onSubmitForm)

function onSubmitForm (e) {
    e.preventDefault();
    e.currentTarget.reset()
    buttonSubscribeSuccess ()
}

function buttonSubscribeSuccess () {
    backdrop.classList.add('is-open')
    body.classList.add('hidden')
}

function onBtnClose () {
    backdrop.classList.remove('is-open')
    body.classList.remove('hidden')
}
