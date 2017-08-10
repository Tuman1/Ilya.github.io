var myImage = document.querySelector('img');

myImage.onclick = function() {
    var MySrc = myImage.getAttribute('src');
    if (MySrc === 'images/ff.jpg'){
        myImage.setAttribute ('src', 'images/ff2.png')
    } else {
        myImage.setAttribute ('src', 'images/ff.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
