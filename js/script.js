
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