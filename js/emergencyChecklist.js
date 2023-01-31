//HTML DOM
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')
let checklist = document.querySelector('.checklist')


function emergencyChecklist(typeOfEmergency) {
    checklist.innerHTML = ''

    //animation für die einblendende Checkliste
    checklist.classList.remove('removed-checklist')
    checklist.classList.add('checklist')
    checklist.classList.remove('invisible')
    footer.classList.add('invisible')
    main.classList.add('invisible')

    //get the type of the emergency and return the related checklist
    if (typeOfEmergency == 'reanimation') {
        checklist.innerHTML = `<header>
        <h1 id="emergency-headline">Reanimation</h1>
        <img src="./img/closeX.png" alt="" onclick="removeChecklist()">
    </header>
    <div id="checklist-list">
        <ul>
            <li>check patient (reaction & breath)</li>
            <li>clear the airway</li>
            <ol>
                <li>stretch the patient's head slightly backwards</li>
                <li>lift his chin</li>
                <li>check if there are any foreign bodies in the mouth and throat that could obstruct breathing</li>
                <li>remove them if possible</li>
            </ol>
            <li>check breath with your ear</li>
            <ol>
                <li>if patient is breathing --> recovery position</li>
                <li>if patient isn't --> continue</li>
            </ol>
            <li>call emergency service (112)</li>
            <li>cardiac massage</li>
            <ol>
                <li>lay the motionless person flat on a hard surface and free their upper body.</li>
                <li>kneeling sideways, place the heel of the hand on the centre of the breastbone, place the second
                    hand on top of the first and interlace the fingers.</li>
                <li>press rhythmically on the chest with arms outstretched</li>
                <li>relieve the pressure on the chest after each pump</li>
                <li>pressure and relief should last about the same amount of time</li>
                <li>the frequency should be at least 100 pushes per minute</li>
                <audio controls style="width: 70vw;">
                    <source src="./media/reviveBeat.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </ol>

        </ul>`

    } else if (typeOfEmergency == 'caraccident') {
        checklist.innerHTML = ` <header>
        <h1 id="emergency-headline">Car accident</h1>
        <img src="./img/closeX.png" alt="" onclick="removeChecklist()">
    </header>
    <div id="checklist-list">
        <ul>
            <li>secure accident site!</li>
            <ol>
                <li>stop your vehicle</li>
                <li>switch on hazard warning lights</li>
                <li>put on safety waistcoat</li>
                <li>set up warning triangle (distance: 50 to 150 paces)</li>
                <li>ask accident witnesses to wait</li>
            </ol>
            <li>provide first aid!</li>
            <li>Call the police?</li>
            <li>only in the case of clear culpability
                accept a police caution money.</li>
            <li>Preserve your own evidence!</li>
        </ul>`
    } else if (typeOfEmergency == 'firebreakout') {
        checklist.innerHTML = `<header> <h1 id="emergency-headline">Fire breakout</h1> <img src="./img/closeX.png" alt="" onclick="removeChecklist()"> </header> <div id="checklist-list"> <ul> <li>Stay calm</li> <li>Close the door of the room in which the fire has started</li> <ol> <li>Try to extinguish the fire with a fire extinguisher</li> <li>If the fire can't be put out, evacuate the building immediately</li> </ol> <li>Call the fire department</li> <li>Do not use the elevator</li> <li>If you are outside, go to a safe place and wait for the fire department</li> </ul> </div>`
    } else if (typeOfEmergency == 'earthbreak') {
        checklist.innerHTML = `<header> <h1 id="emergency-headline">Fire breakout</h1> <img src="./img/closeX.png" alt="" onclick="removeChecklist()"> </header> <div id="checklist-list"> <ul> <li>Stay calm</li> <li>Close the door of the room in which the fire has started</li> <ol> <li>Try to extinguish the fire with a fire extinguisher</li> <li>If the fire can't be put out, evacuate the building immediately</li> </ol> <li>Call the fire department</li> <li>Do not use the elevator</li> <li>If you are outside, go to a safe place and wait for the fire department</li> </ul> </div>`
    } else if (typeOfEmergency == 'flooding') {
        checklist.innerHTML = `<header> <h1 id="emergency-headline">Flooding</h1> <img src="./img/closeX.png" alt="" onclick="removeChecklist()"> </header> <div id="checklist-list"> <ul> <li>Stay calm</li> <li>Turn off electricity, gas and water</li> <li>If the water is rising quickly, evacuate the building immediately</li> <ol> <li>If driving, abandon the car and move to higher ground</li> <li>If on foot, move to higher ground</li> </ol> <li>Stay away from fast-moving water</li> <li>Call for help if necessary</li> </ul> </div>`
    }
}

function removeChecklist() {
    checklist.classList.add('removed-checklist')
    setTimeout(() => { checklist.classList.add('invisible') }, 100)
    footer.classList.remove('invisible')
    main.classList.remove('invisible')

    //entfernt den content 
    //document.querySelector('#checklist-list').innerHTML = ''
}