
var organistas = [
   
]

$('#add').click(function(){
    let org = $('#inputOrganista').val()
    if(org != ''){
        organistas.push({ nome: org, restricao: [], tocar: 0 })
        $('#inputOrganista').val('')
        renderizarOrganista()
    }
})

function renderizarOrganista(){
    let html = ''
    for(let i in organistas){
        html += `<li class="list-group-item">${organistas[i].nome} <button data-index="${i}" class="remover btn btn-danger btn-sm float-right">Remover</button></li>`
    }
    $('#lista').html(html)
}


$(document).on(toqueTela, '.remover', function(){
    let i = $(this).data('index')
    organistas.splice(i, 1)
    renderizarOrganista()
})