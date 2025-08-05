const wait = setInterval(() => {
    const themeSwitch = document.getElementById('theme-switch')
    if(themeSwitch){

let darkMode = localStorage.getItem('darkMode')

const enableDarkmode = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', null)
}

if(darkMode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})
clearInterval(wait);
    }
}, 1000);
