'use strict';
var number_map_to_word = function (collection) {
    let a = "abcdefghijklmnopqrstuvwxyz"
    return collection.map(item => a[item - 1])
};

module.exports = number_map_to_word;
