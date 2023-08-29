var toqueTela = 'ontouchstart' in window ? 'touchstart' : 'click'
var dt = new Date();
var dr = new Date();


function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            if (dias.indexOf(criarTextData(i.toString(), 1)) > -1) cells += "<div class='today dia dia-check'>" + i + "</div>";
            else cells += "<div class='today dia'>" + i + "</div>";
        }
        else if (dias.indexOf(criarTextData(i.toString(), 1)) > -1) cells += "<div class='dia dia-check'>" + i + "</div>";
        else
            cells += "<div class='dia'>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para) {
    if(para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if(para == 'proximo') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}


var dias = []

var pad = "00"


$(document).on(toqueTela, '.dia', function(){
    let dia = $(this).html()
    let item = criarTextData(dia, 1)
    var index = dias.indexOf(item)
    console.log(index)
    if(index == -1){
        console.log(item)
        $(this).addClass('dia-check')
        dias.push(item)
    } else {
        dias.splice(index, 1)
        $(this).removeClass('dia-check')
    }

})

function criarTextData(dia, tipo){
    if(tipo) d = dt
    else d = dr
    var ans = pad.substring(0, pad.length - dia.length) + dia
    var mes = `${d.getMonth() + 1}`
    var mes = pad.substring(0, pad.length - mes.length) + mes
    return `${d.getFullYear()}-${mes}-${ans}`

}

function ordenar(){
    dias.sort()
}

function moveDate(para) {
    if(para == "prev") {
        d.setMonth(d.getMonth() - 1);
    } else if(para == 'proximo') {
        d.setMonth(d.getMonth() + 1);
    }
    renderDate();
}



function moverData(para) {
    if(para == "prev") {
        dr.setMonth(dr.getMonth() - 1);
    } else if(para == 'proximo') {
        dr.setMonth(dr.getMonth() + 1);
    }
    renderizarRestricao();
}


function renderizarRestricao() {
    dr.setDate(1);
    var day = dr.getDay();
    var today = new Date();
    var endDate = new Date(
        dr.getFullYear(),
        dr.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dr.getFullYear(),
        dr.getMonth(),
        0
    ).getDate();
    var months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    document.getElementById("mes").innerHTML = months[dr.getMonth()];
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for (i = 1; i <= endDate; i++) {
        if (dias.indexOf(criarTextData(i.toString(), 0)) > -1) {
            if (organistas[i_org]['restricao'].indexOf(criarTextData(i.toString(), 0)) > -1) cells += "<div class='culto culto-check'>" + i + "</div>";
            else cells += "<div class='culto'>" + i + "</div>";
        }
        else if (organistas[i_org]['restricao'].indexOf(criarTextData(i.toString(), 0)) > -1) cells += "<div class='culto'>" + i + "</div>";
        else
            cells += "<div class='prev_date'>" + i + "</div>";
    }
    document.getElementById("dias").innerHTML = cells;

}

var i_org = 0
$(document).on('change', '#select', function(){
    i_org = $('#select').val()
    renderizarRestricao()
})