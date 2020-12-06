'use strict';
var calculate_median = function (collection) {
    return collection[((collection.length >> 1))]
};
module.exports = calculate_median;
