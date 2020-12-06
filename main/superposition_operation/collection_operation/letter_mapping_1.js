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

function map_to_even(collection) {
    return collection.map(item => item * 2)
}

function even_to_letter(collection) {

    //在这里写入代码
    return number_map_to_word_over_26(collection.filter(i => ((i & 1) === 0)))
}

module.exports = even_to_letter;
