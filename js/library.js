const userCardTemplate = document.querySelector("[data-task-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})