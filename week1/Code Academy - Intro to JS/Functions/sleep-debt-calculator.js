const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Tuesday':
            return 7;
        case 'Wednesday':
            return 8;
        case 'Thursday':
            return 9;
        case 'Friday':
            return 6;
        case 'Saturday':
            return 10;
        case 'Sunday':
            return 8;
    }
};

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    'Sunday'
];

const getActualSleepHours = () => {
    let res = 0;
    for (let i = 0; i < weekDays.length; i++) {
        res += getSleepHours(weekDays[i]);
    }
    return res;
}

const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
    }
    if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
    if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt();

