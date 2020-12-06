'use strict';

function choose_no_repeat_number(collection) {
    //在这里写入代码
    let getAll = new Set(collection)
    let answer = []
    getAll.forEach(item => answer.push(item))
    return answer
}

module.exports = choose_no_repeat_number;
