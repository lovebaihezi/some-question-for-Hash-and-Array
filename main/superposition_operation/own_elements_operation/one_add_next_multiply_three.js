'use strict';
function one_add_next_multiply_three(collection) {
    let length = collection.length;
    return collection.map((v, i) => {
        if (i != length) {
            return (v + collection[i + 1]) * 3
        }
        return []
    }).filter(v => (!isNaN(v)))
}
module.exports = one_add_next_multiply_three;
