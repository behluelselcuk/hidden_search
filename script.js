'use strict'

// ZIEL
// Wenn man auf das Such-Icon drückt
//     Dann fügt es die Klasse active dem .search-Div hinzu, wenn nicht vorhanden
//     Wenn vorhanden, entfernt JS die .active-Klasse


// EINGABE
let searchSec = document.querySelector('.search')
let searchBtn = document.querySelector('#searchBtn')



// VERARBEITUNG
function updateStatus() {
    if (!searchSec.classList.contains('active')) {
        searchSec.classList.add('active');
    }
    else {
        searchSec.classList.remove('active');
    }
}

searchBtn.addEventListener('click', updateStatus)