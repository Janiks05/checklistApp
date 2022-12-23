//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

let checklist = document.querySelector('.checklist')

//gibt checkliste aus 
function getChecklist() {
    checklist.classList.remove('invisible')
    footer.classList.add('invisible')
    main.classList.add('invisible')

    fetch('https://checklist-daily-api.onrender.com/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

//schließt checkliste --x zurück zur Hauptseite
function removeChecklist() {
    footer.classList.remove('invisible')
    main.classList.remove('invisible')
    checklist.classList.add('removed-checklist')
    setTimeout(checklist.classList.add('invisible'), 200)
}


