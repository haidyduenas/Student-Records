'use strict';

class Applab{
    constructor(){
        this.laboratorians = [];
    }
    setup(){
        $('#addStudent').on('click',this.addStudent);
        $('#printAll').on('click',this.printAll);
        $('#updateDropOut').on('click',this.updateDropOut);
        $('#runEmployability').on('click',this.runEmployability);
    }
    addStudent(){
        console.log("hola")
        let name = prompt("Nombre de la estudiante:");
        let pTec = prompt("Puntaje técnico:");
        let hse = prompt("Puntaje HSE:");
        this.laboratorians.push({name:name,pTec:pt,hse:hse});
        $('#contStudent').empty();
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
        $('#contStudent').append(infoStudent);
    }
    
    printAll(){
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
    updateDropout(){
        this.laboratorians = this.laboratorians.filter(function(person){
            return (parseInt(person.ptj)+parseInt(person.hse))/2 >= 70;
        });
        this.printAll(this.laboratorians);
    }
    run(){
        this.laboratorians = this.laboratorians.filter(function(person){
            return (parseInt(person.ptj)+parseInt(person.hse))/2 >= 70;
        });
        this.printAll(this.laboratorians);
    }
}
let firstLab = new  Applab;

$(document).ready(firstLab);