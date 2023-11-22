const
    notifiactionBellDisplay = document.querySelector('.notification-bell-tab'),

    bell = document.querySelector('#notification-bell'),
    notificationIcons = document.querySelector('#notification-icons'),
    notificationDash = document.querySelector('#notification-dash'),
    notificationCheck = document.querySelector('#notification-check-mark'),

    userInfo = document.querySelector('#user-info'),
    userIcon = document.querySelector('.user-info-icon'),
    userinfotab = document.querySelector('.user-info-tab'),

    // ul = document.querySelectorAll('ul')
    label = document.querySelectorAll('#label')
;



// evennt and micro interractions

bell.addEventListener('click', () => {
    notifiactionBellDisplay.classList.toggle('active');
    bell.classList.toggle('active');

    userinfotab.classList.remove('active');
    userInfo.classList.remove('active')

})

userIcon.addEventListener('click', ()=> {
    userinfotab.classList.toggle('active');
    userInfo.classList.toggle('active');

    notifiactionBellDisplay.classList.remove('active');
    bell.classList.remove('active');
})





notificationDash.addEventListener('click' ,()=> {
    notificationDash.classList.toggle('active');
})

notificationCheck.addEventListener('click', () => {
    notificationCheck.classList.toggle('active');
})



label.forEach(list => {

    list.addEventListener('click', e=> {
        e.target.classList.toggle('active')
    })

})




const dts = document.querySelectorAll('#dts')


dts.forEach(detail => {
    detail.addEventListener('click', e=> {
        detail.classList.toggle('active')
    })
})