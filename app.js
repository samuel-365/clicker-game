
//---------------------------------------------------------------- COOKIE VARIABLES
let cookieValue = document.querySelector('#cookieValue');
let totalCookies = 0;
let cookieClick = document.querySelector('#cookieImg');

let cookiesPerSecond = document.querySelector('#cookiesPerSecond');
let cookieMultiplier = 0;


//---------------------------------------------------------------- PROGRESS BAR VARIABLES
let progressDone = document.querySelector('.progressDone');
let progressBarValue = totalCookies / 100;

//---------------------------------------------------------------- ACHIEVEMENTS VARIABLES
let achievement1 = document.querySelector('#achievement1');
let achievement2 = document.querySelector('#achievement2');
let achievement3 = document.querySelector('#achievement3');
let achievement4 = document.querySelector('#achievement4');
let achievement5 = document.querySelector('#achievement5');
let achievement6 = document.querySelector('#achievement6');
let achievement7 = document.querySelector('#achievement7');
let achievement8 = document.querySelector('#achievement8');
let achievement9 = document.querySelector('#achievement9');
let achievement10 = document.querySelector('#achievement10');

//---------------------------------------------------------------- STORE MOUSE UPGRADE
let mouseUpgradeDisplay = document.querySelector('#mouseUpgradeValueDisplay');
let mouseUpgrade = document.querySelector('#mouseUpgrade');
let mouseUpgradePrice = 30;


//---------------------------------------------------------------- STORE MULTIPLIER
let fasterMultiplierUpgrade = document.querySelector('#fasterMultiplierUpgrade');
let fasterMultiplierDisplay = document.querySelector('#fasterMultiplierValueDisplay');
let fasterMultiplierValue = 1000;
let fasterMultiplierPrice = 250;

//---------------------------------------------------------------- STORE MOUSE CLICK UPGRADE
let mouseMultiplierUpgrade = document.querySelector('#mouseMultiplierUpgrade');
let mouseMultiplierDisplay = document.querySelector('#mouseMultiplierValueDisplay');
let mouseMultiplierUpgradePrice = 10;
let mouseMultiplierUpgradeValue = 1;




//---------------------------------------------------------------- CLICK EVENTS
mouseUpgrade.addEventListener('click', () => {
    if(totalCookies >= mouseUpgradePrice){
        cookieMultiplier += 1;
        totalCookies -= mouseUpgradePrice;
        mouseUpgradePrice += mouseUpgradePrice.toFixed(0) * mouseUpgradePrice.toFixed(0) / mouseUpgradePrice.toFixed(0);

    }
    refreshCookies();
});

fasterMultiplierUpgrade.addEventListener('click', () =>{
    if(totalCookies >= fasterMultiplierPrice){
        fasterMultiplierValue -= 300;
        totalCookies -= fasterMultiplierPrice;
        fasterMultiplierPrice += fasterMultiplierPrice.toFixed(0) * fasterMultiplierPrice.toFixed(0) / fasterMultiplierPrice.toFixed(0);
    }
    refreshCookies();
});


mouseMultiplierUpgrade.addEventListener('click', () => {
    if(totalCookies >= mouseMultiplierUpgradePrice){
        mouseMultiplierUpgradeValue += 1;
        totalCookies -= mouseMultiplierUpgradePrice;
        mouseMultiplierUpgradePrice += mouseMultiplierUpgradePrice.toFixed(0) * mouseMultiplierUpgradePrice.toFixed(0) / mouseMultiplierUpgradePrice.toFixed(0);
    }
    refreshCookies();
});

cookieClick.addEventListener('click', () =>{
    totalCookies += mouseMultiplierUpgradeValue;
    refreshCookies();
});

cookieClick.addEventListener('mousedown', () => { cookieClick.classList.add('clickAnim'); });
cookieClick.addEventListener('mouseup', () => { cookieClick.classList.remove('clickAnim'); });


//---------------------------------------------------------------- TIMER
setInterval(multiplier, fasterMultiplierValue);
setInterval(refreshBtn, 100);


//---------------------------------------------------------------- FUNCTIONS
function refreshCookies() {
    cookieValue.innerHTML = totalCookies.toFixed(1);
    cookiesPerSecond.innerHTML = cookieMultiplier.toFixed(1);
    mouseUpgradeDisplay.innerHTML = mouseUpgradePrice; 
    fasterMultiplierDisplay.innerHTML = fasterMultiplierPrice;
    mouseMultiplierDisplay.innerHTML = mouseMultiplierUpgradePrice;
    progressBarValue = totalCookies / 100;
    progressDone.innerHTML = `${progressBarValue}%`
    progressDone.style.width = `${progressBarValue}%`;

    // ACHIEVEMENTS
    if(totalCookies >= 1000){
        achievement1.classList.remove('grayConquest');
    }

    if(totalCookies >= 2000){
        achievement2.classList.remove('grayConquest');
    }

    if(totalCookies >= 3000){
        achievement3.classList.remove('grayConquest');
    }

    if(totalCookies >= 4000){
        achievement4.classList.remove('grayConquest');
    }

    if(totalCookies >= 5000){
        achievement5.classList.remove('grayConquest');
    }

    if(totalCookies >= 6000){
        achievement6.classList.remove('grayConquest');
    }

    if(totalCookies >= 7000){
        achievement7.classList.remove('grayConquest');
    }

    if(totalCookies >= 8000){
        achievement8.classList.remove('grayConquest');
    }

    if(totalCookies >= 9000){
        achievement9.classList.remove('grayConquest');
    }

    if(totalCookies >= 10000){
        achievement10.classList.remove('grayConquest');
        window.alert('parabens vc ganhou o jogo, agora vai procurar algo pra fazer pelo amor de cristo');
    }
}

function multiplier(){
    totalCookies += cookieMultiplier;
    refreshCookies();
}

function refreshBtn(){
    if(totalCookies < mouseUpgradePrice){
        mouseUpgrade.classList.add('disabledButton');
    }else{
        mouseUpgrade.classList.remove('disabledButton');
    }

    if(totalCookies < fasterMultiplierPrice){
        fasterMultiplierUpgrade.classList.add('disabledButton');
    }else{
        fasterMultiplierUpgrade.classList.remove('disabledButton');
    }

    if(totalCookies < mouseMultiplierUpgradePrice){
        mouseMultiplierUpgrade.classList.add('disabledButton');
    }else{
        mouseMultiplierUpgrade.classList.remove('disabledButton');
    }
}