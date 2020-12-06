'use strict';

function get_union(collection_a: number[], collection_b: number[]): number[] {
    //在这里写入代码
    let getAll: Set<number> = new Set<number>(collection_a);
    let answer: number[] = []
    collection_b.forEach(item => getAll.add(item))
    getAll.forEach(item => answer.push(item))
    return answer
}

// console.log(
//     get_union([10, 27, 28, 19, 5], [5, 78, 28, 19, 23])
// )
