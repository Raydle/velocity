//Tabs

const tabsBtns = document.querySelectorAll(".tabs_nav button");
const tabsItems = document.querySelectorAll(".tabs_item");

// Функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide'));
    tabsBtns.forEach(item => item.classList.remove('active'))
}

//Функция показывает переданный номер таба и делает соотв. ему кнопку активной

function showTab(index) {
    tabsItems[index].classList.remove('hide')
    tabsBtns[index].classList.add('active')
}

hideTabs()
showTab(1)

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}))


//Anchors

const anchors = document.querySelectorAll(".header_nav a")

anchors.forEach(anc => {
    anc.addEventListener('click', function(event) {
        event.preventDefault()

        const id = anc.getAttribute('href')
        const elem = document.querySelector(id)

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        })
    })
})

