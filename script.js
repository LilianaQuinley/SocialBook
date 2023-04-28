var settingsMenu = document.querySelector('.settings-menu')
var darkBtn = document.getElementById("dark-btn");

function settingMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height');
}

darkBtn.onclick = function (){
    darkBtn.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')

    // this was added after created the localStorage conditions,
    // to updated the local storage: 
    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', "dark")
    }
    else {
        localStorage.setItem('theme', "light")
    }
    console.log(localStorage);
}

// lOCAL STORAGE IN JAVASCRIPT. because each time we reload the page the darktheme is gone. 
// we need to use the Local storage function to save and keep the dark theme 
//   two items inside the parentessis localStore name is: 'theme' and the value is 'dark' or 'light
// localStorage.setItem('theme', 'light'); para asignar la condicion
// localStorage.getItem('theme') : para guardar la condicion 

if(localStorage.getItem('theme') == 'light'){
    // from onclick function instead of toggle, usar remove para quitar el darktheme: 
    darkBtn.classList.remove('dark-btn-on')
    document.body.classList.remove('dark-theme')
} 
else if (localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn-on')
    document.body.classList.add('dark-theme')
} 
else {
    // for the first time users or to set the value for first time users
    localStorage.setItem('theme', "light")
}




