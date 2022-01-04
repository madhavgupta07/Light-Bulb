const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const switchs = document.getElementById('switchs')
const image = document.getElementById('myImage');
const body = document.getElementById('body');
const turnOnFunction = () => {
    image.src = 'turnOn.png';
    switchs.innerHTML = 'Bulb in ON'
    body.style.backgroundColor = '#ffff99'
}
const turnOffFunction = () => {
    image.src = 'turnOff.png';
    switchs.innerHTML = 'Bulb in OFF'
    body.style.backgroundColor = '#999999'
}


turnOn.addEventListener('click', turnOnFunction);
turnOff.addEventListener('click', turnOffFunction);
turnOffFunction();
