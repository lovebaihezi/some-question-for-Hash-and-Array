'use strict';

function get_intersection(collection_a: number[], collection_b: number[]): number[] {
    //在这里写入代码
    let collect: Object = {};
    collection_a.forEach(item => collect[item] === undefined ? collect[item] = 1 : collect[item]++);
    return collection_b.filter(item => item in collect);
}

// console.log(
//     get_intersection([10, 27, 28, 19, 5], [5, 78, 28, 19, 23])
// )