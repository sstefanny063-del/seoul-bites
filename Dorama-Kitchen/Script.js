function mensagem(){alert("Promoção: Ramyeon grátis na compra de dois Bulgogi!");

}


function boasVindas() {
    alert("Bem-vindos ao Seoul Bites!");
}





function enviarmensagem(){alert("Reserva enviada com sucesso!");}

function reservar() { 

alert("RESERVA CONFIRMADA COM SUCESSO!");

let nome = document.getElementById("nome").value;
    let data = document.getElementById("date").value;
    let horario = document.getElementById("horario").value;
   let pessoas = document.getElementById("pessoas").value;
  
   document.getElementById("mensagem").innerHTML = 

  "Reserva confirmada para " + nome + "<br>Data:" + data + "<br>Horário:" + horario + "<br>Pessoas:" + pessoas;
  
}

function comentario(){

alert("Obrigada pelo seu comentário");

document.getElementById("resposta").innerHTML = 
"Obrigada pelo seu comentário"

}

