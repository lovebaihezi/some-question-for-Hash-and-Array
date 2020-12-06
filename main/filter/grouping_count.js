function grouping_count(collection) {
    //在这里写入代码
    var getAll = new Map();
    var answer = {};
    collection.forEach(function (item) { return getAll.set(item, getAll.has(item) ? getAll.get(item) + 1 : 1); });
    getAll.forEach(function (value, key) {
        answer[key] = value;
    });
    return answer;
}
module.exports = grouping_count;
// console.log(grouping_count([1, 1, 1, 1, 2, 3, 1, 3, 4, 2, 3, 1, 3, 4, 2]));
