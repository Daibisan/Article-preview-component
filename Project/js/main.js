const dropupSmallScreen = document.querySelector('.small-screen')
const dropUpBigScreen = document.querySelector('#dropup')
const shareBtn = document.querySelector('#button-one')
const shareBtn2 = document.querySelector('#button-two')
const shareButtons = []
shareButtons.push(shareBtn,shareBtn2)

shareButtons.forEach(button => {
  button.addEventListener('click', () => {
    togglingClasses()
  })
})

function togglingClasses() {
  shareBtn.classList.toggle('actived')
  shareBtn2.classList.toggle('actived')
  dropupSmallScreen.classList.toggle('actived')
  dropUpBigScreen.classList.toggle('actived')
}