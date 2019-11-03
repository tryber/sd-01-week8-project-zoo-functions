high thoughts






function setOpenHour(...input) {
    const openHour = new Array;
    for (let i of input) {
        openHour.push(data.hours[`${i}`].open);
    }
    return openHour
}

function setCloseHour(...input) {
    const closeHour = new Array;
    for (let i of input) {
        closeHour.push(data.hours[`${i}`].close);
    }
    return closeHour
}

function setHour(...input) {
    const hour = new Array;
    for (let i of input) {
        if ((i == 24) || (i < 12)) {
            if (i == 24) {
                hour.push(`0am`);
            } else {
                hour.push(`${i}am`);
            }
        } else {
            if (i == 12) {
                hour.push(`0pm`);
            } else {
                hour.push(`${i - 12}pm`);
            }
        }
    }
    return hour
}

function schedule() {
    const dayName = Object.keys(data.hours);
    const openHour = setOpenHour(...dayName);
    const closeHour = setCloseHour(...dayName);
    const openHourajust = setHour(...openHour);
    const closeHourajust = setHour(...closeHour);
    const obj = new Object;
    for (i = 0; i < dayName.length; i++) {
        if (i == (dayName.length - 1)) {
            obj[dayName[i]] = 'CLOSED'
        } else {
            obj[dayName[i]] = `Open from ${openHourajust[i]} until ${closeHourajust[i]}`
        }
    }
    return obj
};
const assert = require('assert'),
    expected = {
        'Tuesday': 'Open from 8am until 6pm',
        'Wednesday': 'Open from 8am until 6pm',
        'Thursday': 'Open from 10am until 8pm',
        'Friday': 'Open from 10am until 8pm',
        'Saturday': 'Open from 8am until 10pm',
        'Sunday': 'Open from 8am until 8pm',
        'Monday': 'CLOSED'
    };
assert.deepEqual(schedule(), expected);
