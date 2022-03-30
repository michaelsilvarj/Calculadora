
 function calcular(tipo, valor){
    if(tipo === 'acao') {
       
        //limpar o visor
      if(valor === 'c'){  
        if (audio === true){bip () }   
        document.getElementById('resultado').value = '';
      }
    }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        if (audio === true){bip () } 
        document.getElementById('resultado').value += valor;
      }
      if(valor === '=') {
        if (audio === true){bip () } 
        var valor_campo = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = valor_campo;

      }else if (tipo === 'valor') {
        if (audio === true){bip () }
      document.getElementById('resultado').value += valor;
    }

    
}


// função ativar e desativar audio
var audio = false;
function playaudio (){
    
    if (audio === false) {
        audio = !audio;
        
        console.log('audio ativado');
        

    } else if (audio === true) {
        audio = !audio;
        console.log('audio desativado');
    }
}
   
//Carrega o som

function bip (){
    const som = new Audio();
    som.src="./sound/click.mp3";
    som.play();
    console.log('Bipou');
    
}