<?php

require_once __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf();

$mpdf->WriteHTML('
<link rel="stylesheet" href="view.css">
<div class="conteudo">
<h3 style="color: #666; text-align: center;"> Lista de Organistas - Santo Anastácio</h3><div class="wrapper">
<div class="calendar">
    <div class="month">
    
        <div>
            <h2 id="month">Janeiro</h2>
            Santo Anastácio
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
        <div class="prev_date">27</div><div class="prev_date">28</div><div class="prev_date">29</div><div class="prev_date">30</div><div class="prev_date">31</div><div class="dia-check">1<br>Ednalva</div><div class="prev_date">2</div><div class="prev_date">3</div><div class="prev_date">4</div><div class="dia-check">5<br>Beatriz</div><div class="prev_date">6</div><div class="prev_date">7</div><div class="dia-check">8<br>Aparecida</div><div class="prev_date">9</div><div class="prev_date">10</div><div class="prev_date">11</div><div class="dia-check">12<br>Paula</div><div class="prev_date">13</div><div class="prev_date">14</div><div class="dia-check">15<br>Beatriz</div><div class="prev_date">16</div><div class="prev_date">17</div><div class="prev_date">18</div><div class="dia-check">19<br>Aparecida</div><div class="prev_date">20</div><div class="prev_date">21</div><div class="dia-check">22<br>Paula</div><div class="prev_date">23</div><div class="prev_date">24</div><div class="prev_date">25</div><div class="dia-check">26<br>Ednalva</div><div class="prev_date">27</div><div class="prev_date">28</div><div class="dia-check">29<br>Aparecida</div><div class="prev_date">30</div><div class="prev_date">31</div>
    </div>
</div></div>
<div class="wrapper">
<div class="calendar">
    <div class="month">
    
        <div>
            <h2 id="month">Fevereiro</h2>
            Santo Anastácio
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
        <div class="prev_date">31</div><div class="prev_date">1</div><div class="prev_date">2</div><div class="prev_date">3</div><div class="dia-check">4<br>Paula</div><div class="prev_date">5</div><div class="prev_date">6</div><div class="prev_date">7</div><div class="prev_date">8</div><div class="dia-check">9<br>Ednalva</div><div class="dia-check">10<br>Beatriz</div><div class="dia-check">11<br>Paula</div><div class="prev_date">12</div><div class="prev_date">13</div><div class="prev_date">14</div><div class="prev_date">15</div><div class="prev_date">16</div><div class="dia-check">17<br>Ednalva</div><div class="dia-check">18<br>Beatriz</div><div class="prev_date">19</div><div class="prev_date">20</div><div class="prev_date">21</div><div class="prev_date">22</div><div class="prev_date">23</div><div class="dia-check">24<br>Aparecida</div><div class="dia-check">25<br>Ednalva</div><div class="prev_date">26</div><div class="prev_date">27</div><div class="prev_date">28</div>
    </div>
</div></div>
<div class="wrapper">
<div class="calendar">
    <div class="month">
    
        <div>
            <h2 id="month">Março</h2>
            Santo Anastácio
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
        <div class="prev_date">28</div><div class="prev_date">1</div><div class="prev_date">2</div><div class="prev_date">3</div><div class="dia-check">4<br>Beatriz</div><div class="dia-check">5<br>Aparecida</div><div class="prev_date">6</div><div class="prev_date">7</div><div class="prev_date">8</div><div class="prev_date">9</div><div class="dia-check">10<br>Paula</div><div class="dia-check">11<br>Beatriz</div><div class="prev_date">12</div><div class="prev_date">13</div><div class="prev_date">14</div><div class="prev_date">15</div><div class="dia-check">16<br>Aparecida</div><div class="dia-check">17<br>Paula</div><div class="prev_date">18</div><div class="prev_date">19</div><div class="prev_date">20</div><div class="prev_date">21</div><div class="prev_date">22</div><div class="dia-check">23<br>Ednalva</div><div class="dia-check">24<br>Aparecida</div><div class="prev_date">25</div><div class="prev_date">26</div><div class="prev_date">27</div><div class="prev_date">28</div><div class="prev_date">29</div><div class="prev_date">30</div><div class="prev_date">31</div>
    </div>
</div></div></div>');
$mpdf->Output();


?>

