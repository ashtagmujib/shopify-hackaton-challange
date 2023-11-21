const
    notifiactionBellDisplay = document.querySelector('.notification-bell-tab'),

    bell = document.querySelector('#notification-bell'),
    notificationIcons = document.querySelector('#notification-icons'),
    notificationDash = document.querySelector('#notification-dash'),
    notificationCheck = document.querySelector('#notification-check-mark'),

    // userInfo = document.querySelector('#user-info'),
    userIcon = document.querySelector('.user-info-icon'),
    userinfotab = document.querySelector('.user-info-tab'),
    userinfo = document.querySelectorAll('#label')
;



// evennt and micro interractions

bell.addEventListener('click', () => {
    notifiactionBellDisplay.classList.toggle('active');
    bell.classList.toggle('active')
})

notificationDash.addEventListener('click' ,()=> {
    notificationDash.classList.toggle('active');
})

notificationCheck.addEventListener('click', () => {
    notificationCheck.classList.toggle('active');
})


userIcon.addEventListener('click', ()=> {
    userinfotab.classList.toggle('active')
})


userinfo.forEach(info => {
    info.addEventListener('click', e=> {
        e.target.classList.toggle('active')
    })
})