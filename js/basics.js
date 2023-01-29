//html elements
let dateElement = document.querySelector('#dateelement')
let timeOfDay = document.querySelector('#timeofday')

const today = new Date

const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()
const date = day + '/' + month + '/' + year
console.log(date)
dateElement.innerHTML += date

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    timeOfDay.innerText = 'Time: ' + time;
    timeOfDay.textContent = 'Time: ' + time;

    setTimeout(showTime, 1000);

}

showTime()

