const removeFromArray = function(...args) {
    const array = args[0]; //the first item in our list of arguments is the array, so we pull it out
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
