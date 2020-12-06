'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    //在这里写入代码
    return collection_a.filter(item =>
        collection_b.some(itemB => item % itemB == 0)
    )
}

console.log(choose_divisible_integer([4, 7, 9, 25, 16, 21, 64, 32, 35, 49], [2, 3, 5]))

module.exports = choose_divisible_integer;
