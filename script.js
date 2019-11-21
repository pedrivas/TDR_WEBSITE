var dados = document.getElementById("dados");
var res = document.getElementById("res");
var HTML =  dados.innerHTML;
var radios = {};

function home() {
    //var contHome = document.getElementById("pills-home");
    //contHome.innerHTML = 'tESTE COM JAVASCRIPT';
    res.innerHTML = ""
    sec.style.width = "600px"
    dados.innerHTML = HTML;
}

function contato() {
    res.innerHTML = ""
    var sec = document.getElementById("sec");
    sec.style.width = "350px"
    dados.innerHTML = ` <h3>Pedro Drivas</h3>
                        <p>
                            <img style="width:50px; heigth:50px" src="data:image/png;base64,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" alt=""> 
                            Sacomã - SP
                        </p>
                        <p>
                            <img style="width:50px; heigth:50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG_xBevaQigtgkWJbfEy4tPK09B8XJwM2Y43kxsMCswDkwERN&s" alt=""> 
                            (11)94472-3018
                        </p>
                        <p style="padding-left:50px"><h4 style="padding-left:15px">drivaspedro@gmail.com</h4></p>
                        <p>
                            <img style="width:50px; heigth:50px" src="data:image/png;base64,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" alt="">
                            <a href="https://www.linkedin.com/in/pedro-drivas-bb2b6694/">linkedin/pedro-drivas</a>
                        </p>`
}

function resumo() {
    sec.style.width = "650px"
    res.innerHTML = ""
    dados.innerHTML =   `<h3><b>Resumo</b></h3>
                         <p>Experiência de 4 anos em atividades administrativas e elaboração de projetos técnicos de engenharia, sendo 1 ano na área de prevenção e combate a incêncio e pânico e 3 anos em HVAC.</p>
                         <p>Atuando desde 04/2018 com ERP TOTVS Protheus, desenvolvendo rotinas específicas para atender a necessidade de clientes e tendo contato diário com lógica de negócio e tecnologias de modelos de dados, Web Services, API, Cloud e Frameworks de desenvolvimento.</p>
                         <p>Minhas experiências de vida e aptidões me transformaram em uma pessoa inconformada, apaixonada por tecnologia e de perfil analítico. Não tenho medo de errar e adoro desenvolver soluções criativas.</p>                   
                         <p>Gosto de compartilhar conhecimentos e tenho a característica de criar laços facilmente com as pessoas que eu convivo. </p>`
}

function exp(){
    sec.style.width = "1000px"
    dados.innerHTML =  `<div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onclick="descri()">
                            <label class="form-check-label" for="inlineRadio1">Tecnologia</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onclick="descri()">
                            <label class="form-check-label" for="inlineRadio2">Engenharia</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onclick="descri()">
                            <label class="form-check-label" for="inlineRadio3">Outros</label>
                        </div>`                        
                        radios = document.getElementsByName("inlineRadioOptions");                                

}

function descri() {
    if (radios[0].checked) {
   
        res.innerHTML = `<br>
                         <img style="width:200px; heigth:400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyhYt4HR9tEh0SlCPB3iDQhsrPT0gT-GtztjtKHlr06henx-C&s" alt=""> 
                         <br>
                         <h4><b>Técnico de Implantação de Sistemas</b> <br> </h4>
                         <h5>04/2018 - Até o momento</h5>
                         <p>Implantação, customização e desenvolvimento de rotinas de sistemas ERP.</p>
                         <h4><b>Estagiário de Implantação de Sistemas</b> <br> </h4>
                         <h5>04/2018 - 10/2018</h5>
                         <p>Capacitações em habilidades técnicas e interpessoais. Acompanhamento de implantação de sistemas.</p>`
    } else if (radios[1].checked) {
        res.innerHTML = `<br>
                        <img style="width:200px; heigth:400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrbDoLDTDOVpwMBXvICFqSBsNz2z8KQ_pHLAbaUvFeRctBmKL0Q&s" alt=""> 
                        <br><br>
                        <h4><b>Assistente Técnico de Obras</b> <br> </h4>
                        <h5>01/2016 - 03/2018</h5>
                        <p>Assistência técnica e acompanhamento de obras do setor de HVAC. Elaboração de projetos, levantamento de materiais, desenvolvimento de relatórios, planilhas de controle e medições de contrato.</p>
                        <h4><b>Estagiário de Engenharia</b> <br> </h4>
                        <h5>05/2015 - 12/2015</h5>
                        <p>Auxílio administrativo na implementação de obras de HVAC.</p>
                        <br><br>
                        <h2>PROS ENGENHARIA</h2>
                        <br>
                        <h4><b>Desenhista Projetista</b> <br> </h4>
                        <h5>08/2014 - 04/2015</h5>
                        <p>Elaboração de projetos de combate à incêndio e pânico.</p>
                        <h4><b>Encarregado de Expedição</b> <br> </h4>
                        <h5>11/2013 - 07/2014</h5>
                        <p>Expedição de projetos para clientes.</p>`
    } else if (radios[2].checked) {
        res.innerHTML = `<br>
                        <img style="width:200px; heigth:400px" src="data:image/png;base64,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" alt=""> 
                        <br>
                        <h4><b>Waiter</b> <br> </h4>
                        <h5>03/2012 - 11/2012</h5>
                        <p>Atendimento de mesa, fechamento de caixa.</p>`
    }
}

function formAcad(){
    res.innerHTML = ""
    sec.style.width = "400px"
    sec.style.heigth = "500px"
    dados.innerHTML =   `<img style="width:200px; heigth:500px" src="data:image/png;base64,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" alt=""> 
                         <h4><b>Bacharelado em Engenharia de Controle e Automação</b> <br> </h4>
                         <br>
                         <h5>01/2015 - 12/2019</h5>`
}

function hobbies(){
    res.innerHTML = ""
    sec.style.width = "400px"
    sec.style.heigth = "500px"
    dados.innerHTML =   `<div class="accordion" id="accordionExample">
                         <div class="card">
                         <div class="card-header" id="headingOne">
                             <h5 class="mb-0">
                             <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Esportes
                             </button>
                             </h5>
                         </div>
                     
                         <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                             <div class="card-body">
                                Stand Up Paddle<br><br>
                                Slackline
                             </div>
                         </div>
                         </div>

                         <div class="card">
                         <div class="card-header" id="headingTwo">
                             <h5 class="mb-0">
                             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Música
                             </button>
                             </h5>
                         </div>
                         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                             <div class="card-body">
                                Bateria<br><br>
                                Cajón
                             </div>
                         </div>
                         </div>

                         <div class="card">
                         <div class="card-header" id="headingFive">
                             <h5 class="mb-0">
                             <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                 Robótica
                             </button>
                             </h5>
                         </div>
                         <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                             <div class="card-body">
                                Arduino<br><br>
                                Raspberry Pi
                             </div>
                         </div>
                         </div>

                         </div>`   
}

function habil() {
    res.innerHTML = ""
    sec.style.width = "400px"
    dados.innerHTML = `<div class="container">
                       <div class="row">
                       <div class="col">
                           <b>javaScript</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>

                       <div class="row">
                       <div class="col">
                           <b>CSS</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div><br>
                       
                       <div class="row">
                       <div class="col">
                           <b>HTML5</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div><br>
                       
                       <div class="row">
                       <div class="col">
                           <b>Excel</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>Python</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>SQL</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 65%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>AdvPL</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 80%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>Angular</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 30%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>Git</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br>
                       
                       <div class="row">
                       <div class="col">
                           <b>BootStrap</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div> <br> 
                       
                       <div class="row">
                       <div class="col">
                           <b>AutoCad</b>
                       </div>
                       <div class="col">
                            <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 85%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                       </div>
                       </div>`
                       
}

function idioma() {
    res.innerHTML = ""
    sec.style.width = "400px"
    dados.innerHTML = "<h2>Inglês - Avançado</h2>"
}

function next() {
    res.innerHTML = ""
    sec.style.width = "700px"
    dados.innerHTML =   `<h2><b>Próximos Passos</b></h2>
                         <p>Acompanhando o ritmo em que novas soluções e ferramentas surgem, sempre estou me atualizando. Como parte dessa estratégia, tenho o objetivo de cursar um MBA em Business Analytics e Big Data. </p>
                         <p>Busco uma oportunidade de utilizar todo o meu potencial para ser responsável pelo desenvolvimento de grandes projetos que melhorem a qualidade de vida das pessoas. </p>
                         `
}