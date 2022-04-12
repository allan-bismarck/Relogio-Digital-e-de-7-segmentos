var uppers = document.querySelectorAll(".upper");
var lowers = document.querySelectorAll(".lower");

function watch() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hour < 10) {
        hour = "0" + hour;
    }
    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }

    var currentHour = hour + ':' + min + ':' + sec; 
    sevenSegmentsDisplay(hour, min, sec);
    document.getElementById("rel").value = currentHour;
}

function sevenSegmentsDisplay() {

    var date = new Date();
    var hour = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();

    if(hour < 10) {
        hour = "0" + hour;
    }
    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }

    currentHour = hour + min + sec;
    showNumber(currentHour);
}

function showNumber(currentHour) {
    var i, length = currentHour.length;
    for(i = 0; i < length; i++) {
        switch(currentHour[i]) {
            case '0':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#002400";
                lowers[i].style.borderLeftColor = "#0f0";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '1':
                uppers[i].style.borderTopColor = "#002400";
                uppers[i].style.borderLeftColor = "#002400";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#002400";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#002400";
                break;
            case '2':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#002400";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#0f0";
                lowers[i].style.borderRightColor = "#002400";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '3':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#002400";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '4':
                uppers[i].style.borderTopColor = "#002400";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#002400";
                break;
            case '5':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#002400";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '6':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#002400";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#0f0";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '7':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#002400";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#002400";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#002400";
                break;
            case '8':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#0f0";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
            case '9':
                uppers[i].style.borderTopColor = "#0f0";
                uppers[i].style.borderLeftColor = "#0f0";
                uppers[i].style.borderRightColor = "#0f0";
                uppers[i].style.borderBottomColor = "#0f0";
                lowers[i].style.borderLeftColor = "#002400";
                lowers[i].style.borderRightColor = "#0f0";
                lowers[i].style.borderBottomColor = "#0f0";
                break;
        }
    }
}

var time = setInterval(watch, 1000);
var time = setInterval(sevenSegmentsDisplay, 1000);