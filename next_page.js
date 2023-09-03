function validateForm() {
    var name = document.getElementById('nameInput').value;
    var age = document.getElementById('ageInput').value;
    var date = document.getElementById('dateInput').value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var ageRegex = /^\d+$/;
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!nameRegex.test(name)) {
        console.log('Invalid name');
        return false;
    }

    if (!ageRegex.test(age)) {
        console.log('Invalid age');
        return false;
    }

    if (!dateRegex.test(date)) {
        console.log('Invalid date');
        return false;
    }
}
  
function changePageColor() {
    var body = document.body;

    var colors = ['grey', 'white', 'whitesmoke', 'lightgrey'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
    localStorage.setItem('pageColor', randomColor);

    var helloElement = document.getElementById('hello');

    var fontSize = Math.floor(Math.random() * 21) + 10;
    helloElement.style.fontSize = fontSize + 'px';

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var maxLeft = windowWidth - helloElement.offsetWidth;
    var maxTop = windowHeight - helloElement.offsetHeight;
    var leftPosition = Math.floor(Math.random() * maxLeft);
    var topPosition = Math.floor(Math.random() * maxTop);
    helloElement.style.left = leftPosition + 'px';
    helloElement.style.top = topPosition + 'px';
}


function displayHello() {
    var helloElement = document.getElementById('hello');
    helloElement.textContent = 'Hello!!';
}
function displayTimeExpired() {
    var expiredMessage = document.getElementById('expiredMessage');
    expiredMessage.textContent = 'Time Expired';
}
window.onload = function () {
    validateForm();
    changePageColor();
    setInterval(displayHello, 1000);
    setTimeout(displayTimeExpired, 12000);
};
