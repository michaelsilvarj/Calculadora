
function calcular(tipo, valor){
    if(tipo === 'acao') {
        //limpar o visor
      if(valor === 'c'){        
        document.getElementById('resultado').value = '';
      }
    }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor;
      }
      if(valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = valor_campo;

      }else if (tipo === 'valor') {

      document.getElementById('resultado').value += valor;
    }
}


// função ativar e desativar audio
let audio = false;
function playaudio (botao){
    if (audio === false) {
        audio = true;
        console.log('audio ativado');

    } else if (audio === true) {
        audio = false;
        console.log('audio desativado');
    }
}
   
soundonoff(){
    
}