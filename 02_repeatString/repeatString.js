function repeatString(string, number) {
    let longString = "";
    if (number < 0) {
        return "ERROR"
    }
    else for (i = parseInt(number); i > 0; i--) {
        longString += string;
    }
    return longString.toString();
}

// Do not edit below this line
module.exports = repeatString;
