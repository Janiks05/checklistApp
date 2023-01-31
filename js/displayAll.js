const dailys = document.querySelector('#dailys')

function getAndDisplayChecklistMainFrame() {
    fetch('https://checklist-daily-api.onrender.com/')
        .then(res => {
            return res.json()
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {

                if (data[i][0] !== 0) {
                    console.log(data[i]);

                    dailys.innerHTML += `
                    <div class="daily" onclick="getChecklist('${data[i][0]}')">
                        <header>
                            <h2>${data[i][1]}</h2>
                            <div class="del-btn"></div>
                        </header>
                        
                        <img src="${data[i][2]}" alt="">
                    </div>
            `

                }
                else {
                    dailys.innerHTML += `
                    <div class="emptydaily">
                    
                    </div>
                    `
                }
            }
        })
}
getAndDisplayChecklistMainFrame()