'use strict';

function find_first_even(collection) {
    //在这里写入代码
    for (let i in collection) {
        if ((collection[i] & 1) === 0) {
            return collection[i]
        }
    }
}

module.exports = find_first_even;

