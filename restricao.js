function renderizarSelect(){
    html = ''
    for(let i in organistas){
        html += `<option value="${i}">${organistas[i].nome}</option>"`
    }
    $('#select').html(html)
}

$(document).on(toqueTela, '.culto', function(){
    let dia = $(this).html()
    let item = criarTextData(dia, 0)
    var index = organistas[i_org]['restricao'].indexOf(item)
   
    if(index == -1){
        console.log(item)
        $(this).addClass('culto-check')
        organistas[i_org]['restricao'].push(item)
    } else {
        organistas[i_org]['restricao'].splice(index, 1)
        $(this).removeClass('culto-check')
    }

})