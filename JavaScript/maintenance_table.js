
// Create variables and constants for generating calendar
let tableHTML = "";
let date = new Date();
const months = [
    "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", 
    "November", "December"
];
const days = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]
const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];
makeCalendar(date);

// Create the heading for the table
function makeHeading(curDate) {
    let month = curDate.getMonth();

    tableHTML += "<caption>Sample Maintenance Schedule</caption><thead>";
    tableHTML += "<tr><th colspan=\"7\" id=\"month\">" + months[month] + "</th></tr><tr id=\"days-of-week\">";
    // Add the days of the week at the top
    for (let i = 0; i < daysOfWeek.length; i++) {
        tableHTML += "<th>" + daysOfWeek[i] + "</th>";
    }
    tableHTML += "</tr></thead>";
}

// Make sure if it is a leap year, February has 29 days
function checkLeapYear(curDate) {
    // Only do anything if it is February
    if (curDate.getMonth() === 1) {
        let year = curDate.getYear();
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            days[1] = 29;
        }
    }
}

function addNumbers(curDate) {
    let numDays = days[curDate.getMonth()];
    let firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    // Get the weekday of the last day of the month
    let lastDay = new Date(curDate.getFullYear(), curDate.getMonth(), numDays).getDay();
    let firstDayofMonth = firstDay.getDay();

    // Add beginning of table row in case first day of month is Sunday
    tableHTML += "<tr>";
    for (let i = 0; i < firstDayofMonth; i++) {
        tableHTML += "<td id=\"none\"></td>";
    }
    for (let i = 1; i <= numDays; i++) {
        // Get the current weekday to check if needed to go to new row
        if (i === curDate.getDate()) {
            tableHTML += "<td class=\"today\"><h3>" + i + "</h3>";
        } else {
            tableHTML += "<td><h3>" + i + "</h3>";
        }
        
        // Get the current weekday
        let weekDay = new Date(curDate.getFullYear(), curDate.getMonth(), i).getDay();
        
        switch (weekDay) {
            // Water change on Sunday
            case 0: tableHTML += "<p>Water Change</p>"; break;
            case 2: tableHTML += "<p>Feed Corals</p>"; break;
            // Change filter sock on Thursday
            case 4: tableHTML += "<p>Change filter sock</p>"; break;
            // Perform a water test on Saturday
            case 6: tableHTML += "<p>Water Test</p>"; break;
        }
        tableHTML += "<p>Feed Fish</p></td>";
        
        // End of the week, create new row
        if (weekDay === 6) {
            tableHTML += "</tr><tr>";
        }
    }
    for (let i = lastDay; i < 6; i++) {
        tableHTML += "<td id=\"none\"></td>";
    }
    tableHTML += "</tr>";
}

// Main function to generate and add html to table
function makeCalendar(curDate) {
    makeHeading(curDate);
    checkLeapYear(curDate);
    tableHTML += "<tbody>";
    addNumbers(curDate);
    tableHTML += "</tbody>";
    document.getElementById("weekly-maintenance").innerHTML = tableHTML;
    
}

