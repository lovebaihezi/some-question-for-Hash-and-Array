'use strict';
var number_map_to_word_over_26 = function (collection) {
    let a = "abcdefghijklmnopqrstuvwxyz";
    let b = ""
    return collection.map(item => (
        (item < 26) ? a[item - 1]
            : (() => {
                b = ""
                if (item > 26) {
                    b += a[(item - item % 26) / 26 - 1]
                }
                if (item % 26 > 0) {
                    b += a[item % 26 - 1];
                }
                return b
            })()
    ))
};

// console.log(number_map_to_word_over_26([1, 13, 27, 30, 25, 27]))

module.exports = number_map_to_word_over_26;
