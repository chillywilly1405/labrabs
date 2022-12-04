let allsquare = document.getElementsByClassName('square');

for (i = 0; i < allsquare.length; i++) {
    allsquare[i].onmouseover = function() {
        this.style.background = "red"
    }
    allsquare[i].onclick = function() {
        this.style.background = '#ffffff'
    }
}