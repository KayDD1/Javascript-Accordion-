const accordionBtns = document.querySelectorAll('.accordion-question')

accordionBtns.forEach(btn => {
 btn.addEventListener('click', (event)=>{
  btn.classList.toggle('open')
  console.log( btn);
  btn.nextElementSibling.classList.toggle('open')
 })
});