$(document).ready(function () {
  
  let slideAtual=1
  let list = ['carousel-inner', 'carousel-item']
  
  setInterval(changeSlides, 2000)

  function changeSlides () {

    if(slideAtual > 0) {

      $("#carousel-inner").removeClass(list[slideAtual -1])


    } else {
      $("#carousel-inner").removeClass(list [list.length -1])
    }
    
    $("#carousel-inner").addClass(list [slideAtual])

    // console.log("Slide atual é :", slideAtual)

    slideAtual++ 

    if (slideAtual > 2) {
      slideAtual = 0
    }


  }

})


//Função para comparar senhas
function comparePassword () {
    let senha1 =  document.getElementById('password1').value;
    let senha2 = document.getElementById('password2').value;

    if (senha1 != senha2) {
        alert('Senhas não conferem')
    } else {
      alert('Cadastrado com Sucesso!')
    }


  }