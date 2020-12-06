'use strict';

function get_integer_interval(number_a: number, number_b: number): number[] {
    //在这里写入代码
    let length: number = Math.abs(number_b - number_a) + 1
    let a: number = Math.min(number_a, number_b)
    let answer: Array<number> = new Array<number>(length)
    answer = <Array<number>>answer.fill(a).map((item, index) => item + index)
    if (number_a > number_b)
        answer = answer.reverse()
    if (answer.length == 1)
        answer = [number_a]
    return answer
}

// console.log(
//     get_integer_interval(1, 6),
//     get_integer_interval(6, 3),
//     get_integer_interval(5, 5))