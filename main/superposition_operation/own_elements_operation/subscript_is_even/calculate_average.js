'use strict';
var calculate_average = function (collection) {
    return collection.filter((v, i) => (i + 1) % 2 == 0).reduce((a, b) => a + b) / collection.filter((v, i) => (i + 1) % 2 == 0).length
};
module.exports = calculate_average;
