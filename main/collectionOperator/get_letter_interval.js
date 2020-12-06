'use strict';
function get_letter_interval(number_a, number_b) {
    var trans = "abcdefghijklmnopqrstuvwxyz".split('');
    //在这里写入代码
    var length = Math.abs(number_b - number_a) + 1;
    var a = Math.min(number_a, number_b);
    var answer = new Array(length);
    var A = answer.fill(a).map(function (item, index) { return trans[item + index - 1]; });
    if (number_a > number_b)
        A = A.reverse();
    if (answer.length == 1)
        A = [trans[number_a - 1]];
    return A;
}
module.exports = get_letter_interval;
