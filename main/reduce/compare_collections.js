'use strict';

function compare_collections(collection_a, collection_b) {
    //在这里写入代码
    return collection_a.every((item, index) => collection_b[index] == item)
}

module.exports = compare_collections;


