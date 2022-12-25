//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')
let checklist = document.querySelector('.checklist')


function emergencyChecklist(typeOfEmergency) {
    //animation für die einblendende Checkliste
    checklist.classList.remove('removed-checklist')
    checklist.classList.add('checklist')
    checklist.classList.remove('invisible')
    footer.classList.add('invisible')
    main.classList.add('invisible')

    //get the type of the emergency and return the related checklist
    if (typeOfEmergency == 'reanimation') {

    }
}

function removeChecklist() {
    checklist.classList.add('removed-checklist')
    setTimeout(() => { checklist.classList.add('invisible') }, 100)
    footer.classList.remove('invisible')
    main.classList.remove('invisible')

    //entfernt den content 
    document.querySelector('#checklist-list').innerHTML = ''
}