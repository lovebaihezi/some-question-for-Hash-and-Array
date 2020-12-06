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

module.exports = compute_median;


