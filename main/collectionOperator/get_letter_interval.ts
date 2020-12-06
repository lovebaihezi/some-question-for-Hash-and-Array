'use strict';

function get_letter_interval(number_a: number, number_b: number): string[] {
    let trans: string[] = "abcdefghijklmnopqrstuvwxyz".split('')
    //在这里写入代码
    let length: number = Math.abs(number_b - number_a) + 1
    let a: number = Math.min(number_a, number_b)
    let answer: Array<number> = new Array<number>(length)
    let A = answer.fill(a).map((item, index) => trans[item + index - 1])
    if (number_a > number_b)
        A = A.reverse()
    if (answer.length == 1)
        A = [trans[number_a - 1]]
    return A;
}
console.log(
    get_letter_interval(1, 5)
    , get_letter_interval(5, 1)
    , get_letter_interval(5, 5)
    ,
)