'use strict';

function average_to_letter(collection) {
    let a = "abcdefghijklmnopqrstuvwxyz";
    //在这里写入代码
    return a[Number.parseInt(collection.reduce((a, b) => a + b) / collection.length)]

}

module.exports = average_to_letter;

