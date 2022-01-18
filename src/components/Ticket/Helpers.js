const transfersQuantity = stops => {
    const num = stops.length;
    switch (num) {
        case 0:
            return 'Без пересадок';
        case 1:
            return '1 пересадка';
        case 2:
            return '2 пересадки';
        default:
            return `${num} пересадки`;
    }
    ;
};

const transfersNames = stops => {
    let res = '';
    for (let n = 0; n < stops.length; n++) {
        res = res + stops[n] + ', ';
    }
    return res.slice(0, -2);
};

const flightTime = duration => {
    let time = '';
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    time = `${hours}ч ${minutes}м`
    return time;
};

const getHoursAndMinutes = ms => {
    const date = new Date(ms);
    return `${date.getHours() < 9 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}`;
};




export { transfersQuantity, transfersNames, flightTime, getHoursAndMinutes };