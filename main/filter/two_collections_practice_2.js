'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    //在这里写入代码
    // let answer = [];
    return collection_a.filter(item => (!collection_b.includes(item)))
    // return answer
}

console.log(choose_no_common_elements(["a", "e", "h", "t", "f", "c", "g", "b", "d"], ["a", "d", "e", "f"]))

module.exports = choose_no_common_elements;
