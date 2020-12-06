'use strict';
var is_exist_element = function (collection, element) {
    return collection.some((v, i) => i % 2 === 0 && v === element)
};
module.exports = is_exist_element;
