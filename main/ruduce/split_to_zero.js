'use strict';

function spilt_to_zero(number, interval) {
    //在这里写入代码
    let answer
    if (Number.parseInt(number / interval) === number / interval) {
        answer = new Array(number / interval + 1)
    }
    else {
        answer = new Array(Number.parseInt(number / interval) + 2)
    }
    return answer.fill(number).map((item, index) => Number.parseFloat((item - interval * index).toFixed(1)))
}

module.exports = spilt_to_zero;
