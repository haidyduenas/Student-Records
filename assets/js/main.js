'use strict';
let laboratorians =[];

function addStudent() {
     let person = { 
     name:prompt("Nombre :","Nombres y Aprellido");
     pTe:prompt("Porcentaje Tecnico : ");
     hse:prompt("Porcentaje Habilidades Socio Emocionales");
     };

     laboratorians.push(persona);
     let infoStudent =`<div class='row'>\
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>\
                            <div class='spacesDatos'>\
                                <div class='card-content white-text'>\
                                    <p><strong>Nombre:</strong>${person.name}</p>\                                  
                                    <p><strong>Puntos Técnicos:</strong>${person.pTe}%</p>\
                                    <p><strong>Puntos HSE:</strong>${person.hse}%</p>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\ `
    $('#contStudent').empty();
    $('#contStudent').append(infoStudent);
}

function printAll() {
    $('#contStudent').empty();
    laboratorians.map(function(person){
    $('#contStudent').append(`<div class='row'>\
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>\
                            <div class='spacesDatos'>\
                                <div class='card-content white-text'>\
                                    <p><strong>Nombre:</strong>${person.name}</p>\                                  
                                    <p><strong>Puntos Técnicos:</strong>${person.pTe}%</p>\
                                    <p><strong>Puntos HSE:</strong>${person.hse}%</p>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\ `);
    });

}

function updateDropOut(e){
    laboratorians = laboratorians.filter(function(person){
       return (parseInt(person.pTe) + parseInt(person.hse))/2 >= 70 ; 
    });
    printAll(laboratorians);
    //estudiantes.map(aplicacion.mostrar)
}
function runEmployability(e){
    laboratorians = laboratorians.filter(function(person){
       return (parseInt(person.pTe) + parseInt(person.hse))/2 >= 70 ; 
    });
    printAll(laboratorians);
 }

function btnInit (){
    $('#addStudent').on('click',addStudent);
    $('#printAll').on('click',printAll);
    $('#updateDropOut').on('click',updateDropOut);
    $('#runEmployability').on('click',runEmployability);
}

$(document).ready(btnInit);