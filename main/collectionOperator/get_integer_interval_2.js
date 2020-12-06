'use strict';
function get_integer_interval_2(number_a, number_b) {
    var length = (Math.abs(number_b - number_a) + 1) >> 1;
    var a = Math.min(number_a, number_b);
    var answer = new Array(length);
    answer = answer.fill(a).map(function (item, index) { return item + index * 2 + 1; });
    if (number_a > number_b)
        answer = answer.reverse();
    if (number_b == number_a)
        answer = number_a % 2 == 0 ? [number_a] : [];
    return answer;
}
module.exports = get_integer_interval_2;