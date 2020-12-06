'use strict';

function double_to_one(collection) {
    //在这里写入代码
    let set = new Set();
    return collection.flat().flatMap(item =>
        (
            set.has(item) ? []
                : (set.add(item), [item])
        )
    )
}

// console.log(double_to_one([[1, 2, 3], [5, 2, 1, 4], [2, 1]]))

module.exports = double_to_one;
