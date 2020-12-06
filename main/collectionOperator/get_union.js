'use strict';
function get_union(collection_a, collection_b) {
    //在这里写入代码
    var getAll = new Set(collection_a);
    var answer = [];
    collection_b.forEach(function (item) { return getAll.add(item); });
    getAll.forEach(function (item) { return answer.push(item); });
    return answer;
}
module.exports = get_union;
