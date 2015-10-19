// #YOLO date.js 

// let's create a function that tells us what day it is
var days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

function whatDayIsIt() {
	return days[ new Date().getDay() ];
} // get today's day name

module.exports = {
	whatDayIsIt: whatDayIsIt
}