const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        oldStart = start;
        start = end;
        end = oldStart;
    }
    if (start < 0 || end < 0 || typeof(start) !== 'number'
        || typeof(end) !== 'number') {
        return "ERROR";
    }
    for (i =  start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
