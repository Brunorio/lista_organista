var atribuicao = []
var dias = [
	"2020-01-03",
	"2020-01-05",
	"2020-01-07",
	"2020-01-10",
	"2020-01-12",
	"2020-01-14",
	"2020-01-17",
	"2020-01-19",
	"2020-01-21",
	"2020-01-24",
	"2020-01-26",
	"2020-01-28",
	"2020-01-31",
	"2020-02-02",
	"2020-02-04",
	"2020-02-07",
	"2020-02-09",
	"2020-02-11",
	"2020-02-14",
	"2020-02-16",
	"2020-02-18",
	"2020-02-21",
	"2020-02-23",
	"2020-02-25",
	"2020-02-28",
	"2020-03-01",
	"2020-03-03",
	"2020-03-06",
	"2020-03-08",
	"2020-03-10",
	"2020-03-13",
	"2020-03-15",
	"2020-03-17",
	"2020-03-20",
	"2020-03-22",
	"2020-03-24",
	"2020-03-27",
	"2020-03-29",
	"2020-03-31",
]

var organistas = [
	{
		"nome": "Ednalva",
		"restricao": [
			"2020-01-03",
			"2020-01-10",
			"2020-01-17",
			"2020-01-24",
			"2020-01-31",
			"2020-02-07",
			"2020-02-14",
			"2020-02-21",
			"2020-02-28",
			"2020-03-06",
			"2020-03-13",
			"2020-03-20",
			"2020-03-27",
		],
		"tocar": 0
	}, 
	{
		"nome": "Leonice",
		"restricao": [
			"2020-01-07",
			"2020-01-14",
			"2020-01-21",
			"2020-01-28",
			"2020-02-04",
			"2020-02-11",
			"2020-02-18",
			"2020-02-25",
			"2020-03-03",
			"2020-03-10",
			"2020-03-17",
			"2020-03-24",
			"2020-03-31",
		],
		"tocar": 0
	},
	{
		"nome": "Gabrielli",
		"restricao": [
			"2020-01-07",
			"2020-01-14",
			"2020-01-21",
			"2020-01-28",
			"2020-02-04",
			"2020-02-11",
			"2020-02-18",
			"2020-02-25",
			"2020-03-03",
			"2020-03-10",
			"2020-03-17",
			"2020-03-24",
			"2020-03-31",
		],
		"tocar": 0
	},
	{
		"nome": "Aparecida",
		"restricao": [],
		"tocar": 0
	},
	{
		"nome": "Paula",
		"restricao": [],
		"tocar": 0
	},
	{
		"nome": "Roselaine",
		"restricao": [
			"2020-01-07",
			"2020-01-14",
			"2020-01-21",
			"2020-02-04",
			"2020-02-11",
			"2020-02-18",
			"2020-02-25",
			"2020-03-03",
			"2020-03-10",
			"2020-03-17",
			"2020-03-24",
			"2020-03-31",

		],
		"tocar": 0
	},
	{
		"nome": "Beatriz",
		"restricao": [
			"2020-02-04",
			"2020-02-07",
			"2020-02-11",
			"2020-02-14",
			"2020-02-18",
			"2020-02-21",
			"2020-02-25",
			"2020-02-28",
			"2020-03-03",
			"2020-03-06",
			"2020-03-10",
			"2020-03-13",
			"2020-03-17",
			"2020-03-20",
			"2020-03-24",
			"2020-03-27",
			"2020-03-31",
		],
		"tocar": 0
	}
]

let o = Math.floor(Math.random() * (0, organistas.length)) 


for(let d in dias){
	let analisador = true
	while(analisador){
		if(organistas[o].restricao.length == 0){			
			if(!checkUltimasAtribuicao()){
				o = proxima(o, organistas)
				continue
			}
			atribuicao.push({
				"nome": organistas[o]['nome'],
				"dia": dias[d]
			})
			organistas[o]['tocar']++
			analisador = false
		}
		else if(Date.parse(organistas[o].restricao[0]) == Date.parse(dias[d])) {
			organistas[o].restricao.shift()
			o = proxima(o, organistas)
		}
		else if(Date.parse(organistas[o].restricao[0]) < Date.parse(dias[d])) organistas[o].restricao.shift()
		else {
			if(!checkUltimasAtribuicao()){
				o = proxima(o, organistas)
				continue
			}
			atribuicao.push({
				"nome": organistas[o]['nome'],
				"dia": dias[d]
			})
			organistas[o]['tocar']++
			analisador = false
		}

	}
	
	organistas.sort((a, b) => {
		return (a.tocar > b.tocar) ? 1 : ((b.nome > a.nome) ? -1 : 0);
	})
	o = 0
	
}

const fs = require('fs')
console.table(organistas)
fs.writeFileSync("./list.bs", JSON.stringify(atribuicao))

function proxima(index, lista){
	if(index + 1 < lista.length) return index + 1
	else return 0
}


function checkUltimasAtribuicao(){
	let tamanho = atribuicao.length
	let u = tamanho == 0 ? 0 : tamanho - 1
	if(!u) return true
	if(atribuicao[u]['nome'] == organistas[o]['nome']) return false
	if(tamanho > 1){
		u = tamanho - 2
		if(atribuicao[u]['nome'] == organistas[o]['nome']) return false
	}
	if(tamanho > 2){
		u = tamanho - 3
		if(atribuicao[u]['nome'] == organistas[o]['nome']) return false
	}
	return true
}