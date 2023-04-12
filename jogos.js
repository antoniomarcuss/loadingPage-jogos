  let verCategoria2 = document.querySelector('.categoria2');
  verCategoria2.style.display = 'none'; // define a propriedade display
  let btn = document.querySelector('.verCategoria').addEventListener('click', function(){
    if(verCategoria2.style.display === 'none'){
      verCategoria2.style.display = 'flex';
    } else {
      verCategoria2.style.display = 'none';
    }
  });