function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

// Avoid running this function. It is recursive

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    return console.log(hours+":"+mins+":"+secs);
}
setInterval(printTime, 1000)