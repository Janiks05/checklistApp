//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

let checklist = document.querySelector('.checklist')

//gibt checkliste aus 
function getChecklist() {
    footer.classList.add('invisible')
    main.classList.add('invisible')
    checklist.classList.remove('invisible')

    fetch('https://checklist-daily-api.onrender.com/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

//schließt checkliste --x zurück zur Hauptseite
function removeChecklist() {
    footer.classList.remove('invisible')
    main.classList.remove('invisible')
    checklist.classList.add('invisible')
}


