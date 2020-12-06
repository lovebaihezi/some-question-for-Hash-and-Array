'use strict';

function compute_chain_median(collection) {
    //在这里写入代码
    let a = collection.split('->').map(i => Number(i)).sort(
        (a, b) => (a - b)
    )
    if ((a.length & 1) === 0) {
        return (a[a.length / 2] + a[a.length / 2 - 1]) / 2
    }
    return a[a.length / 2]
}

// console.log(compute_chain_median('1->4->6->2->3->10->9->8->11->20->19->30'))

module.exports = compute_chain_median;
