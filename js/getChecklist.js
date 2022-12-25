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

    //get data from api
    fetch('https://checklist-daily-api.onrender.com/')
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data.morningrout.forEach(task => {
            let markup;
            if (task.length >= 2) {
                for (let i = 0; i < task.length; i++) {
                    if (i == 0) {
                        markup = `<li>${task[i]}</li>`
                    } else {
                        markup = `<li>${task[i]}</li>` //soll eingerückt sein
                    }
                    document.querySelector('ul').innerHTML += markup
                }
            } else {
                markup = `<li>${task[0]}</li>`
                document.querySelector('ul').innerHTML += markup

            }

        })));
}

//schließt checkliste --x zurück zur Hauptseite
//animation für die ausblendende Checkliste
function removeChecklist() {
    checklist.classList.add('removed-checklist')
    setTimeout(()=>{checklist.classList.add('invisible')}, 100)
    footer.classList.remove('invisible')
    main.classList.remove('invisible')
}