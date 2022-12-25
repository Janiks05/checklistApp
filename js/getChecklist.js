//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

let checklist = document.querySelector('.checklist')

//gibt checkliste mit daten der API aus 
function getChecklist() {
    //animation für die einblendende Checkliste
    checklist.classList.remove('removed-checklist')
    checklist.classList.add('checklist')
    checklist.classList.remove('invisible')
    footer.classList.add('invisible')
    main.classList.add('invisible')
}

//schließt checkliste --x zurück zur Hauptseite
//animation für die ausblendende Checkliste
function removeChecklist() {
    checklist.classList.add('removed-checklist')
    setTimeout(()=>{checklist.classList.add('invisible')}, 100)
    footer.classList.remove('invisible')
    main.classList.remove('invisible')
}