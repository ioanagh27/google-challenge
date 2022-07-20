const allWebsites = document.getElementById("all-websites");
const randomWebsite = document.getElementById("random-website");

const data = require('../../../server/data');

function displayWebsites(e){
    e.preventDefault()
    fetch('http://localhost:3000/websites')
        .then(resp => resp.text())
        .then(website => allWebsites.textContent = website)
}

function newPage() {window.open("http://localhost:3000/websites", "_blank")}

function displayRandomWebsite(e){
    e.preventDefault()
    fetch('http://localhost:3000/websites/random')
        .then(resp => resp.text())
        .then(randomwebsite => randomWebsite.textContent = randomwebsite)
}

function randPage() {
    const site = window.open("http://localhost:3000/websites/random", "_blank");
    return site
}
