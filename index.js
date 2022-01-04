const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const image = document.getElementById('myImage');
const turnOnFunction = () => {
    image.src = 'turnOn.png';
}
const turnOffFunction = () => {
    image.src = 'turnOff.png';
}


turnOn.addEventListener('click', turnOnFunction);
turnOff.addEventListener('click', turnOffFunction);
turnOffFunction();
