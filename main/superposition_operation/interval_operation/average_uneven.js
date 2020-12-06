'use strict';

function average_uneven(collection) {

    //在这里写入代码
    return collection.filter(i => i % 2 != 0).reduce((a, b) => a + b) / collection.filter(i => i % 2 != 0).length
}

module.exports = average_uneven;
