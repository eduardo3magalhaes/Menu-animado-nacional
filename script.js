const navBar= document.querySelector('.navBar')
const allLi= document.querySelectorAll('li')

allLi.forEach((li,index) => {
    li.addEventListener("click", e => {
        navBar.querySelector(".activeList").classList.remove("activeList")
        li.classList.add("activeList")
        const indicator= document.querySelector(".indicator")
        indicator.style.transform=`translateX(calc(${index*90}px))`
        })
})