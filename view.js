var atribuicao;
function view() {
    atribuicao = localStorage.getItem("atribuicao");
    var comum;
    if (atribuicao == null) {
        location.href = "index.html";
    } else {
        atribuicao = JSON.parse(atribuicao);
        comum = atribuicao["comum"];
        atribuicao = atribuicao["atribuicao"];
    }
    let separado = separaMes();

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
        "Dezembro",
    ];

    let html = "";

    for (let t in separado) {
        html += `
    <div class="wrapper">
    <div class="calendar">
        <div class="month">
        
            <div>
                <h2 id="month">${months[separado[t].mes]}</h2>
                ${comum}
            </div>
        
        </div>
        <div class="weekdays">
            <div>DOM</div>
            <div>SEG</div>
            <div>TER</div>
            <div>QUA</div>
            <div>QUI</div>
            <div>SEX</div>
            <div>SÁB</div>
        </div>
        <div class="days">
            ${getDias(new Date().getFullYear(), separado[t].mes, separado[t].dias)}
        </div>
    </div></div>`;
    }

    $(".conteudo").html(
        '<h3 style="color: #666; text-align: center; margin-bottom: 40px"> Lista de Organistas - ' +
            comum +
            "</h3>"
    );
    $(".conteudo").append(html);
}

function getMes(a) {
    return parseInt(a["dia"].split("-")[1]) - 1;
}

function separaMes() {
    let separado = [];
    let cont = 0;
    let ref = getMes(atribuicao[0]);
    separado[cont] = { mes: ref, dias: [] };
    for (let i in atribuicao) {
        if (getMes(atribuicao[i]) != ref) {
            ref = getMes(atribuicao[i]);
            cont++;
            separado[cont] = { mes: ref, dias: [] };
        }
        separado[cont]["dias"].push(atribuicao[i]);
    }
    return separado;
}

var d;
function getDias(ano, mes, dias) {
    d = new Date();
    d.setMonth(mes);
    d.setDate(1);
    d.setFullYear(ano);

    var day = d.getDay();
    var endDate = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

    var prevDate = new Date(d.getFullYear(), d.getMonth(), 0).getDate();

    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        let index = dias
            .map(function (e) {
                return e.dia;
            })
            .indexOf(criarTextData(i.toString(), 0));
        if (index > -1)
            cells +=
                "<div class='dia-check'>" +
                i +
                "<br>" +
                dias[index]["nome"] +
                "</div>";
        else cells += "<div class='prev_date'>" + i + "</div>";
    }

    return cells;
}

var pad = "00";
function criarTextData(dia) {
    var ans = pad.substring(0, pad.length - dia.length) + dia;
    var mes = `${d.getMonth() + 1}`;
    var mes = pad.substring(0, pad.length - mes.length) + mes;
    return `${d.getFullYear()}-${mes}-${ans}`;
}

function index() {
    location.href = "index.php";
}

function pdf() {
    // if(screen.width <)
    var doc = new jsPDF();
    $(".add").hide();
    $("#aguarde").show();
    var calendarios = document.querySelectorAll(".calendar").length
   
   
    var result = new Promise((resolve, req) => {
        for(let c = 0; c < calendarios; c++) {
            html2canvas(document.querySelectorAll(".calendar")[c]).then((canvas) => {
                var imgData = canvas.toDataURL("image/png");
                console.log(imgData)
                var imgWidth = 210;
                var imgHeight = (canvas.height * imgWidth) / canvas.width;
                var position = 0;
                doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                if(c == calendarios - 1) {
                    resolve(true)
                } else doc.addPage();
            })
        }
    })
    result.then(() => {
        doc.save("lista-organista.pdf");
        $(".add").show();
        $("#aguarde").hide();
    })
 
}

