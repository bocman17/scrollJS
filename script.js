window.addEventListener("scroll", function() {
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight

    if(Math.ceil(scrolled) > 500) {
        let toTop = document.querySelector(".top-page")
        toTop.style.display = "block"

        toTop.addEventListener("click", function() {
            toTop.style.display = "none"
        })
    }
})

let firstItemMenu = document.querySelector(".first-item-menu")
let scrollGoal = document.querySelector(".scroal-goal").offsetTop

firstItemMenu.addEventListener("click", function(e) {
    e.preventDefault()
    window.scrollTo({
        top: scrollGoal,
        behavior: "smooth"
    })
})