'use strict';
var even_group_calculate_average = function (collection) {
    let A = collection.filter((v, i) => (i + 1) % 2 === 0 && v % 2 === 0)
    if (A.length == 0) {
        return [0]
    }
    let answer = [];
    let length = [];
    A.forEach(item => { length[item.toString().length - 1] = 0; answer[item.toString().length - 1] = 0 })
    A.forEach(item => { length[item.toString().length - 1]++; answer[item.toString().length - 1] += item })
    return answer.map((v, i) => (v / length[i])).filter(v => v != undefined)
};

console.log(
    even_group_calculate_average([1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14]),
    even_group_calculate_average([344, 256, 55, 777, 322, 180])
)

module.exports = even_group_calculate_average;
