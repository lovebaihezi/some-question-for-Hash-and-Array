'use strict';
var single_element = function (collection) {
    let A = new Map()
    collection.filter((v, i) => (i + 1) % 2 == 0).forEach(v => {
        A.has(v) ?
            A.set(v, 2)
            : A.set(v, 1)
    })
    return collection.filter((v, i) => (i + 1) % 2 == 0).filter((v, i) => A.get(v) === 1)
};
module.exports = single_element;
