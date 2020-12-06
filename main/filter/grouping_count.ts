function grouping_count(collection: number[]): Object {
    //在这里写入代码
    let getAll: Map<number, number> = new Map();
    let answer = {};
    collection.forEach(item => getAll.set(item, getAll.has(item) ? getAll.get(item) + 1 : 1))
    getAll.forEach((value: number, key: number) => {
        answer[key] = value;
    })
    return answer;
}
// console.log(grouping_count([1, 1, 1, 1, 2, 3, 1, 3, 4, 2, 3, 1, 3, 4, 2]));