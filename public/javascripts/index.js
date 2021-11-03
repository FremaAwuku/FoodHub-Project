//const { header } = require("express-validator")

window.addEventListener("DOMContentLoaded", () => {
    let restDiv = Array.from(document.getElementsByClassName("restaurant-container-div"));

    for(let i = 1; i < restDiv.length; i+=2) {
        restDiv[i].classList.add("flipped");
    }

    document.querySelector('html').addEventListener('click', () => {
        let searchDiv = document.getElementById('search-id')
        let searchField = document.getElementById('search-field')
        if (searchDiv) {
        searchDiv.remove()
        searchField.value = ''
        }

    })

})


