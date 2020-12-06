'use strict';

var number_map_to_word_over_26 = function (collection) {
    let a = "abcdefghijklmnopqrstuvwxyz";
    let b = ""
    return collection.map(item => (
        (item <= 26) ? a[item - 1]
            : (() => {
                b = ""
                if (item == 52) {
                    return "az"
                }
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

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var length = Math.abs(number_b - number_a) + 1;
    var a = Math.min(number_a, number_b);
    var answer = new Array(length);
    var A = answer.fill(a).map(function (item, index) { return item + index });
    if (number_a < number_b)
        return number_map_to_word_over_26(A)
    else
        return number_map_to_word_over_26(A).reverse()
}

module.exports = get_letter_interval_2;

