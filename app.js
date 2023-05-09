
//---------------------------------------------------------------- COOKIE VARIABLES
let cookieValue = document.querySelector('#cookieValue');
let totalCookies = 250;
let cookieClick = document.querySelector('#cookieImg');

let cookiesPerSecond = document.querySelector('#cookiesPerSecond');
let cookieMultiplier = 0;


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
fasterMultiplierUpgrade.addEventListener('click', () =>{
    if(totalCookies >= fasterMultiplierPrice){
        fasterMultiplierValue -= 300;
        totalCookies -= fasterMultiplierPrice;
        fasterMultiplierPrice += fasterMultiplierPrice.toFixed(0) * fasterMultiplierPrice.toFixed(0) / fasterMultiplierPrice.toFixed(0);
    }else{
        window.alert('vc nao tem cookie suficiente irmao');
    }
    refreshCookies();
});

mouseUpgrade.addEventListener('click', () => {
    if(totalCookies >= mouseUpgradePrice){
        cookieMultiplier += 1;
        totalCookies -= mouseUpgradePrice;
        mouseUpgradePrice += mouseUpgradePrice.toFixed(0) * mouseUpgradePrice.toFixed(0) / mouseUpgradePrice.toFixed(0);

    }else{
        window.alert('vc nao tem cookie suficiente irmao');
    }
    refreshCookies();
});

mouseMultiplierUpgrade.addEventListener('click', () => {
    if(totalCookies >= mouseMultiplierUpgradePrice){
        mouseMultiplierUpgradeValue += 1;
        totalCookies -= mouseMultiplierUpgradePrice;
        mouseMultiplierUpgradePrice += mouseMultiplierUpgradePrice.toFixed(0) * mouseMultiplierUpgradePrice.toFixed(0) / mouseMultiplierUpgradePrice.toFixed(0);
    }else{
        window.alert('vc nao tem cookie suficiente irmao');
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


//---------------------------------------------------------------- FUNCTIONS
function refreshCookies() {
    cookieValue.innerHTML = totalCookies.toFixed(1);
    cookiesPerSecond.innerHTML = cookieMultiplier.toFixed(1);
    mouseUpgradeDisplay.innerHTML = mouseUpgradePrice; 
    fasterMultiplierDisplay.innerHTML = fasterMultiplierPrice;
    mouseMultiplierDisplay.innerHTML = mouseMultiplierUpgradePrice;
}

function multiplier(){
    totalCookies += cookieMultiplier;
    refreshCookies();
    console.log(totalCookies, cookieMultiplier);
}