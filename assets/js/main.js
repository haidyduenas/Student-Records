let laboratorians =[];

$('#addStudent').click(addStudent);
$('#printAll').on('click',printAll);
$('#updateDropOut').on('click',updateDropOut);
$('#runEmployability').on('click',runEmployability);


function addStudent() {
     let n1 =prompt("Nombre :","Nombres y Aprellido");
     let n2 =prompt("Porcentaje Tecnico : ");
     let n3 =prompt("Porcentaje Habilidades Socio Emocionales");
     let persona = { 
     nombre:n1,
     pTe:n2,
     hse:n3
     };

     laboratorians.push(persona);
     let infoStudent =`<div class='row'>\
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>\
                            <div class='spacesDatos'>\
                                <div class='card-content white-text'>\
                                    <p><strong>Nombre:</strong>${persona.nombre}</p>\                                  
                                    <p><strong>Puntos Técnicos:</strong>${persona.pTe}%</p>\
                                    <p><strong>Puntos HSE:</strong>${persona.hse}%</p>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\ `
    $('#contStudent').empty();
    $('#contStudent').append(infoStudent);
}

function printAll() {
    $('#contStudent').empty();
    laboratorians.map(function(persona){
    $('#contStudent').append(`<div class='row'>\
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>\
                            <div class='spacesDatos'>\
                                <div class='card-content white-text'>\
                                    <p><strong>Nombre:</strong>${persona.nombre}</p>\                                  
                                    <p><strong>Puntos Técnicos:</strong>${persona.pTe}%</p>\
                                    <p><strong>Puntos HSE:</strong>${persona.hse}%</p>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\ `);
    });

}

function updateDropOut(){
    console.log('hola');
    laboratorians = laboratorians.filter(function(persona){
       res = (parseInt(persona.pTe) + parseInt(persona.hse))/2 <= 70 ; 
       return res;
    });
    console.log (res);
    console.log (lab);
    printAll(lab);
 }
function runEmployability(){
    console.log('hola');
    lab = laboratorians.filter(function(persona){
       res = (parseInt(persona.pTe) + parseInt(persona.hse))/2 <= 70 ; 
       return res;
    });
    printAll(lab);
 }

