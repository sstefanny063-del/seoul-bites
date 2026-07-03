# seoul-bites
Websites inspirado na culinária coreana desenvolvido para estudos de HTML,CSS e JavaScript
Dorama-Kitchen
<!DOCTYPE html>
<html lang="pt-br">
<html>
    
<head>
    <title>SEOUL BITES</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="style.css">
</head>



<body>

<body onload="boasVindas()">  
    
<header>

    <h2> Seoul Bites</h2>

    <nav>
        <a href="index.html">Home</a>
        <a href="cardapio.html">Cardápio</a>
        <a href="galeria.html">Galeria</a>
        <a href="sobre.html">Sobre</a>
        <a href="contato.html">Contato</a>
        <a href="Comentários.html">Comentários</a>
    </nav>

</header>

<style> 

body{text-align: center;}


body {
    font-family: Arial, sans-serif;
    background-color: pink

}

    
span{
    color: darkred;
    font-size: 22px;
    font-weight: bold;
}


.prato{
    background: #f8f8f8;
    padding: 40px;
    margin: 10px auto;
    width: 700px;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
    
}

.bebidas {
background: white;
    padding: 30px;
    margin: 10px auto;
    width: 700px;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
   text-align: center;
}
.prato:hover{
    transform: scale(1.02);
    transition: 0.3s;
}

.bebidas:hover{
    transform: scale(1.02);
    transition: 0.3s;
}
</style>


<section>
<div class="caixa">
<h1>Bem-Vindo ao Seoul Bites</h1>

 <p>Experimente pratos coreanos em um ambiente morderno e instagramavél</p>



</div>

</section>


<h2>Horário de Funcionamento </h2>
<table border="1">
<tr>
    <th>Dia</th>
    <th>Horário</th>
</tr>

<tr>
 <td>Terça a Sexta</td>
 <td>11:00 às 19:00</td>
</tr>

<tr>
    <td>Sábado e Domingo</td>
    <td>12:00 às 21:00</td>
</tr>



</table>


<img src="fachada.png" alt="fachada do restaurante" class="fachada">

<br>


<div class="caixa2">

<h2>Ambiente inspirado na Coreia do Sul</h2>


<p>Venha experimentar!Sabores autênticos,cultura vibrante,músicas temas dos doramas e uma experiência que transporta você para a Coreia do Sul </p>

</div>


<h1>Faça aqui sua reserva</h1>


<form>

<label>Nome:</label> <br>
<input type="text" id="nome" required> <br> <br>

<label>Data:</label> <br>
<input type="date" id="date" required> <br> <br>

<label>Hórario:</label> <br>
<input type="time" id="horario" required> <br> <br>

<label>Número de pessoas:</label> <br>
<input type="number" id="pessoas" min="1" required> <br> <br>

<button type="button"  onclick="reservar()">Reservar</button>


</form>


<p id="mensagem"></p>

<script src="Script.js"></script>



    
</body>







<footer>

<p>2026 Seoul Bites</p>
<p>Resende - RJ</p>

</footer>


</html>
