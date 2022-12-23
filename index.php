<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Organistas</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="calendario.css">
</head>

<body onload="renderDate()">

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                    <h2 id="heading">Lista de Organistas </h2>
                    <p>Congregação Cristã no Brasil</p>
                    <div id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar">
                            <li class="active" id="account"><strong>Dias de Culto</strong></li>
                            <li id="personal"><strong>Organistas</strong></li>
                            <li id="payment"><strong>Restrições</strong></li>
                            <li id="confirm"><strong>Lista</strong></li>
                        </ul>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div> <br> <!-- fieldsets -->
                      
                        <fieldset id="1">
                            <div class="form-card">
                                <div class="row">
                                    <div class="col-7">
                                        <h2 class="fs-title">Selecione os Dias de Culto</h2>
                                    </div>
                                   
                                </div>
                                <div class="conteudo" style="background-color: #fff;">
                                    <div class="calendar">
                                        <div class="month">
                                            <div class="prev" onclick="moveDate('prev')">
                                                <span>&#10094;</span>
                                            </div>
                                            <div>
                                                <h2 id="month"></h2>
                                                
                                            </div>
                                            <div class="proximo" onclick="moveDate('proximo')">
                                                <span>&#10095;</span>
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
                            
                                        </div>
                                    </div>
                                </div>
                            </div> <button type="button" onclick="ordenar()" name="next" class="next action-button" >Próximo</button>
                        </fieldset>
                        <fieldset id="2">
                            <div class="form-card">
                                <div class="row">
                                    <div class="col-7">
                                        <h2 class="fs-title">Organistas</h2>
                                    </div>
                                  
                                </div> <label class="fieldlabels">Nome da Organista</label> <input  id="inputOrganista" type="text" name="fname"
                                    placeholder="Primeiro nome da organista" />
                                <div>
                                    <ul class="list-group" id="lista">
                                        
                                        
                                      </ul>
                                </div>
                            </div> 
                            <button type="button" onclick="renderizarSelect(); renderizarRestricao()" name="next" class="next action-button" value="Next" >Próximo</button> 
                            <button
                                type="button" name="previous" class="previous action-button-previous"
                                value="Previous" >Voltar</button>
                                <button type="button" id="add" name="next" class="add action-button" value="Next" >Adicionar Organista</button> 
                        </fieldset>
                        <fieldset id="3">
                            <div class="form-card">
                                <div class="row">
                                    <div class="col-7">
                                        <h2 class="fs-title">Cultos que a organista não pode tocar</h2>
                                    </div>
                                  
                                </div> <label class="fieldlabels">Organista</label> 
                                    <select id="select">
                                        
                                    </select>
                                    <div class="conteudo">
                                        <div class="calendar">
                                            <div class="month">
                                                <div class="prev" onclick="moverData('prev')">
                                                    <span>&#10094;</span>
                                                </div>
                                                <div>
                                                    <h2 id="mes"></h2>
                                                </div>
                                                <div class="proximo" onclick="moverData('proximo', dr, 0)">
                                                    <span>&#10095;</span>
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
                                            <div id="dias">
                                
                                            </div>
                                        </div>
                                    </div>
                                   
                            </div>
                            <button type="button"  name="next" class="next action-button" value="Next" >Próximo</button> 
                            <button
                                type="button" name="previous" class="previous action-button-previous"
                                value="Previous" >Voltar</button>
                        </fieldset>
                        <fieldset>
                            <div class="form-card">
                                <div class="row">
                                    <div class="col-7">
                                        <h2 class="fs-title">Comum Congregação</h2>
                                    </div>
                                   
                                </div> <label class="fieldlabels">Nome da Comum Congregação</label> <input id="igreja" type="text" name="fname"
                                placeholder="Nome da Comum Congregação" />
                                <button type="button" onclick="go()"  name="next" class="add action-button" value="Next" >Criar Lista</button> 
                              
                                
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="script.js"></script>
<script src="calendario.js"></script>
<script src="organista.js"></script>
<script src="restricao.js"></script>
<script src="atribuicao.js"></script>
</html>