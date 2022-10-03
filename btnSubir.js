window.onscroll = function(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop > 100) {
    document.querySelector('.subir-section').classList.add('show');
  }
  else{
    document.querySelector('.subir-section').classList.remove('show');
  }
}; 
document.querySelector('.subir-section').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})