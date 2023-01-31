//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

let checklist = document.querySelector('.checklist')
let checklistHeadline = document.querySelector('#checklist-headline')

//gibt checkliste mit daten der API aus 
function getChecklist(checklistType) {
    //animation für die einblendende Checkliste
    checklist.classList.remove('removed-checklist')
    checklist.classList.add('checklist')
    checklist.classList.remove('invisible')
    footer.classList.add('invisible')
    main.classList.add('invisible')
    checklistHeadline.innerHTML = ''

    //get data from api
    fetch(`https://checklist-daily-api.onrender.com/${checklistType}`)
        .then(res => {
            return res.json();
        })

        .then(data => {
            console.log(data)
            checklistHeadline.innerHTML = data.name
            data.checklistItems.forEach(task => {
                let markup;
                if (task.length >= 2) {
                    for (let i = 0; i < task.length; i++) {
                        if (i == 0) {
                            if (task[i] == "check-item") {
                                markup = `<div class="check-item">
                        <li>${task[1]}</li>
                        <li>${task[2]}</li>
                        </div>`
                                i = 2
                            } else {
                                markup = `<li>${task[i]}</li>`
                            }
                        } else {
                            markup = `<ol><li>${task[i]}</li></ol>` //soll eingerückt sein
                        }
                        document.querySelector('ul').innerHTML += markup
                    }
                } else {
                    markup = `<li>${task[0]}</li>`
                    document.querySelector('#checklist-list').innerHTML += markup

                }

            })
        })


}

//schließt checkliste --x zurück zur Hauptseite
//animation für die ausblendende Checkliste
function removeChecklist() {
    checklist.classList.add('removed-checklist')
    setTimeout(() => { checklist.classList.add('invisible') }, 100)
    footer.classList.remove('invisible')
    main.classList.remove('invisible')

    //entfernt den content 
    document.querySelector('#checklist-list').innerHTML = ''
}
