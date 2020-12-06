'use strict';
function get_integer_interval(number_a, number_b) {
    //在这里写入代码
    var length = Math.abs(number_b - number_a) + 1;
    var a = Math.min(number_a, number_b);
    var answer = new Array(length);
    answer = answer.fill(a).map(function (item, index) { return item + index; });
    if (number_a > number_b)
        answer = answer.reverse();
    if (answer.length == 1)
        answer = [number_a];
    return answer;
}
module.exports = get_integer_interval;
