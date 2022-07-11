const reverseString = function(string) {
    let newString = "";
    let len = string.length;
    for (i = len; i > 0; i--) {
        let lastLetter = string.substr(i - 1, 1);
        newString += lastLetter;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
