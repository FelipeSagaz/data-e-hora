setInterval(function(){
  atualizaData();
  atualizaHora();
  atualizaMinutos();
  atualizaSegundos();
}, 1000);

function atualizaData(){
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  const dia = $(".dia");
  const mes = $(".mes");
  const ano = $(".ano");

  dia.text(day);
  mes.text(month);
  ano.text(year);
}

function atualizaHora(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  const hora = $(".texto-hora");
  hora.text(hours);
}

function atualizaMinutos(){
  let currentDate = new Date();
  let minutes = currentDate.getMinutes();
  const minuto = $(".texto-minuto");
  if(minutes < 10) minutes = "0" + minutes;
  minuto.text(minutes);
}

function atualizaSegundos(){
  let currentDate = new Date();
  let seconds = currentDate.getSeconds();
  const segundo = $(".texto-segundo");
  segundo.text(seconds);
}
