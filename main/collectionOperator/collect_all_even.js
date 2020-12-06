'use strict';
function collect_all_even(collection) {
    //在这里写入代码
    // let evenList: number[] = [];
    // collection.forEach(
    //     item => (item & 1) == 1 ? false : evenList.push(item)
    // )
    // return evenList
    return collection.filter(function (item) { return (item & 1) === 0; });
}
module.exports = collect_all_even;