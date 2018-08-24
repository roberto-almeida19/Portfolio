var conhecimentos = {
  "conhecimento" : [
{"nome":"Java", "nivel":"70%"},
{"nome":"Spring", "nivel":"30%"},
{"nome":"MySQL", "nivel":"60%"},
{"nome":"JavaScript", "nivel":"50%"},
{"nome":"Eclipse", "nivel":"75%"},
{"nome":"Linux", "nivel":"65%"}
]
};

  conhecimentos.conhecimento.forEach(function(conhecimento){
    console.log(conhecimento.nome);
    console.log(conhecimento.nivel);

  })

$(document).ready(function() {
  var barras = "<div class=\"progress \"><div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width:";
  var barrasf = " \"aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>";
  var rows = "<div class=\"row linhaC\">";
  var col = "<div class=\"col-sm-4 coluna \">"
  linhas =  (conhecimentos.conhecimento.length)/2;
  for (var i = 0; i < linhas; i++) {
    $('#listaConhecimentos').append(rows);
}
  for (var i = 0; i < 2; i++) {
  $(".linhaC").append(col);
}

  
}

  });
