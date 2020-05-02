'use strict'

function mounted () {
    actionListener()
}

function actionListener (){
    var button = document.getElementById('submitButton')
    //var title = document.getElementById('title')

    //title.addEventListener('mouseenter' , function (){


    button.addEventListener('click' , function (event){
        event.preventDefault()
        //console.log('Alguien le dio click')
        validate ()
    })
}

function validate () {
}


mounted()
