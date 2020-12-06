'use strict';
var even_asc_odd_desc = function (collection) {
    return collection.filter(i => i % 2 === 0).sort((a, b) => (a - b)).concat(collection.filter(i => i % 2 != 0).sort((a, b) => (b - a)))
};
module.exports = even_asc_odd_desc;
