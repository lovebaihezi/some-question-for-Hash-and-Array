'use strict';

function get_integer_interval_2(number_a: number, number_b: number) {
    let length: number = (Math.abs(number_b - number_a) + 1) >> 1;
    let a: number = Math.min(number_a, number_b)
    let answer: Array<number> = new Array<number>(length)
    answer = <Array<number>>answer.fill(a).map((item, index) => item + index * 2 + 1)
    if (number_a > number_b)
        answer = answer.reverse()
    if (number_b == number_a)
        answer = number_a % 2 == 0 ? [number_a] : []
    return answer
}
// console.log(
//     get_integer_interval_2(1, 9),
//     get_integer_interval_2(10, 1),
//     get_integer_interval_2(10, 10),
//     get_integer_interval_2(5, 5)
// )