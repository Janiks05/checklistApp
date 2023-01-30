const searchInput = document.querySelector('[data-search]')
let names = []

searchInput.addEventListener('input', e => {
    const value = e.target.value
    const filter = searchInput.value.toLocaleLowerCase()
    console.log(value)
    const listItems = document.querySelectorAll('.daily')
    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
})