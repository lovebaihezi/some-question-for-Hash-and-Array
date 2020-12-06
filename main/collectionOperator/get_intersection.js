'use strict';
function get_intersection(collection_a, collection_b) {
    //在这里写入代码
    var collect = {};
    collection_a.forEach(function (item) { return collect[item] === undefined ? collect[item] = 1 : collect[item]++; });
    return collection_b.filter(function (item) { return item in collect; });
}
module.exports = get_intersection;