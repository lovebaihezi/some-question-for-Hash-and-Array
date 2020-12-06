'use strict';

var number_map_to_word_over_26 = function (collection) {
    let a = "abcdefghijklmnopqrstuvwxyz";
    let b = ""
    return collection.map(item => (
        (item < 26) ? a[item - 1]
            : (() => {
                b = ""
                if (item > 26) {
                    b += a[(item - item % 26) / 26 - 1]
                }
                if (item % 26 > 0) {
                    b += a[item % 26 - 1];
                }
                return b
            })()
    ))
};

function get_letter_interval_2(number_a: number, number_b: number): string[] {
    //在这里写入代码
    let trans: string[] = "abcdefghijklmnopqrstuvwxyz".split('')
    //在这里写入代码
    let length: number = Math.abs(number_b - number_a) + 1
    let a: number = Math.min(number_a, number_b)
    let answer: Array<number> = new Array<number>(length)
    let A: string[] = number_map_to_word_over_26(answer.fill(a).map((item, index) => (item + index)))
    if (number_a > number_b)
        A = A.reverse()
    if (answer.length == 1)
        A = (number_a) > 26 ? (number_a).toString(27).split('').map(item => trans[Number(item)]) : [trans[(number_a - 1)]]
    return A
}

console.log(
    get_letter_interval_2(20, 53),
    get_letter_interval_2(53, 20),
    get_letter_interval_2(28, 28),
);
console.log(Number.parseInt((53).toString(27), 27))
console.log(Number.parseInt('q', 27))