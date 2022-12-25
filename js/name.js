//HTML Elemnt for the name
const nameTag = document.querySelector('#name-headline')

//if there ist no name in LS ask for one
//else, set the name from LS in teh HTML Element
if(localStorage.getItem('name') == null){
    let name = prompt('Whats your name?')
    localStorage.setItem('name', name)
    nameTag.innerHTML += name
} else{
    nameTag.innerHTML += localStorage.getItem('name')
}