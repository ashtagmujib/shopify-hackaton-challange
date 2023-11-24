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
    label = document.querySelectorAll('#label'),
    trialPeriod = document.querySelector('.trial-period'),
    removeTrial = document.querySelector('#remove-trial'),


    setUp = document.querySelector('#setup'),
    arrow = document.querySelector('.arrow'),
    setupDetails = document.querySelector('#setup-details'),

    progressIndicator = document.querySelector('#progress-indicator'),
    progressCount = document.querySelector('#progress-count')
;


let progress = [];


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


removeTrial.addEventListener('click' ,e=> {
    trialPeriod.classList.add('removed');

    setTimeout(() => {
        document.querySelector('main').removeChild(trialPeriod)
    }, 500);

})




setUp.addEventListener('click', e=> {
    if(e.target.matches('.arrow')) {

        arrow.classList.toggle('active');

        if(arrow.classList.contains('active')) {
            setupDetails.classList.add('active');
        } else {
            setupDetails.classList.remove('active');
        }
    }

})

















label.forEach(list => {

    list.addEventListener('click', e=> {
        e.target.classList.toggle('active')
    })

})




const dts = document.querySelectorAll('#dts')


dts.forEach(detail => {

    detail.addEventListener('click', e=> {

        dts.forEach(dt => {
            if(dt !== detail) {
                dt.classList.remove('active')
            }
        })

        detail.classList.add('active');

        if(e.target.matches('#check-bar') || e.target.matches('#check-circle')) {
            
            let 
                checkBar = detail.querySelector('#check-bar')
                loader = detail.querySelector('#loader'),
                checkCircle = detail.querySelector('#check-circle');
            ;

            loader.style.display = 'block';
            checkCircle.style.display = 'none';


            setTimeout(() => {
                loader.style.display = 'none';
                checkBar.classList.toggle('active');
    
                if(checkBar.classList.contains('active')) {
                    loader.style.display = 'none';
                
                    setTimeout (() => {
                        let nextTab = checkBar.parentElement.parentElement 
                        nextTab.classList.remove('active')
                        nextTab.nextElementSibling.classList.add('active')

                    }, 1001)

                    
                }

                else {
                    checkCircle.style.display = 'block';
                }
            }, 1000)

            

        }
    })
})


