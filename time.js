function timer()
{
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours()

if (seconds < 10)
{
	seconds = '0' + seconds;
}

if (minutes < 10)
{
	minutes = '0' + minutes;
}

if (hours < 10)
{
	hours = '0' + hours;
}

document.getElementById('date').innerHTML = '<h1>' + hours + ':' + minutes + ':' + seconds + '</h1>';

setTimeout('timer()', 1000);
}