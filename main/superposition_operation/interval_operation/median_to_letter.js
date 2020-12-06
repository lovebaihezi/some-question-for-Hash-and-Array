'use strict';

function compute_median(collection) {
    //在这里写入代码
    let a = collection.sort(
        (a, b) => (a - b)
    )
    if ((a.length & 1) === 0) {
        return (a[a.length / 2] + a[a.length / 2 - 1]) / 2
    }
    return a[(a.length - 1) / 2]
}

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

function median_to_letter(collection) {
    //在这里写入代码
    // console.log(compute_median(collection).toFixed(0) - 1)
    // console.log([(compute_median(collection).toFixed(0) - 1)])
    return number_map_to_word_over_26([(compute_median(collection).toFixed(0) - 0)])[0]
}

module.exports = median_to_letter;
