function proxima(index, lista) {
  if (index + 1 < lista.length) return index + 1;
  else return 0;
}

function checkUltimasAtribuicao(contagemLoop = 0) {
  let tamanho = atribuicao.length;
  let u = tamanho == 0 ? 0 : tamanho - 1;
  if (!u) return true;

  if(contagemLoop > tamanho - 1) return true;

  if (atribuicao[u]["nome"] == organistas[o]["nome"]){
    if(organistas.length < 3) return true
    return false;
  }
  if (tamanho > 1) {
    u = tamanho - 2;
    if (atribuicao[u]["nome"] == organistas[o]["nome"]) {
      if(organistas.length < 4) return true
      return false;
    }
  }
  if (tamanho > 2) {
    u = tamanho - 3;
    if (atribuicao[u]["nome"] == organistas[o]["nome"]){
      if(organistas.length < 5) return true
      return false;
    }
  }
  return true;
}

var atribuicao = [];
let o = 0;


var nomeIgreja = "";

function go() {
  o = Math.floor(Math.random() * (0, organistas.length))
  nomeIgreja = $("#igreja").val();
  if (nomeIgreja == "") return;
  for (let i in organistas) {
    organistas[i]["restricao"].sort();
  }

  for (let d in dias) {
    let analisador = true;
    let contagemLoop = 0;
    while (analisador) {
      console.log(dias[d], organistas[o], contagemLoop);
      contagemLoop++;
      if (organistas[o].restricao.length == 0) {
        if (!checkUltimasAtribuicao(contagemLoop)) {
          o = proxima(o, organistas);
          continue;
        }
        atribuicao.push({
          nome: organistas[o]["nome"],
          dia: dias[d],
        });
        organistas[o]["tocar"]++;
        analisador = false;
      } else if (
        organistas[o].restricao.findIndex(restricao => restricao === dias[d]) >= 0
      ) {
        o = proxima(o, organistas);
      } 
      else {
        if (!checkUltimasAtribuicao(contagemLoop)) {
          o = proxima(o, organistas);
          continue;
        }
        atribuicao.push({
          nome: organistas[o]["nome"],
          dia: dias[d],
        });
        organistas[o]["tocar"]++;
        analisador = false;
      }
    }

    organistas.sort((a, b) => {
      return a.tocar - b.tocar;
    });
    o = 0;
  }

  localStorage.clear()

  localStorage.setItem('atribuicao', JSON.stringify({atribuicao, comum: nomeIgreja}))
  
  location.href = "lista.html";
}
