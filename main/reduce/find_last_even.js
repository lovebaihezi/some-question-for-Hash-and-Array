'use strict';

function find_last_even(collection) {
    //在这里写入代码
    for (let i = collection.length - 1; i >= 0; i--) {
        if ((collection[i] & 1) === 0) {
            return collection[i]
        }
    }
}

// console.log(find_last_even([1, 2]))

module.exports = find_last_even;
