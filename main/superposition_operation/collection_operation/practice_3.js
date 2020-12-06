'use strict';

function hybrid_operation_to_uneven(collection) {

    //在这里写入代码
    return collection.filter(item => ((item & 1) != 0)).map(item => item * 3 + 5).reduce((a, b) => a + b)
}

module.exports = hybrid_operation_to_uneven;

