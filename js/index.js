let elem = document.getElementsByID("secret")

elem.onmouseover = secretText();

function secretText() {
    elem.style.color = "red";
}