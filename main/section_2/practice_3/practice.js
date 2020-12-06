function count_same_elements(collection) {
    //在这里写入代码
    let map = new Map()
    let answer = []
    collection.forEach(
        item => {
            let count = 1;
            if (item.toString().match(/(-|:|\[)\d+/))
                count = Math.abs(Number.parseInt(item.toString().replace(/\w+(-|:|\[)/g, '')))
            item = item.match(/[^-]/g)[0]
            map.has(item) ?
                map.set(item, map.get(item) + count) :
                map.set(item, count)
        }
    )
    map.forEach((value, key) => {
        answer.push({ summary: value, name: key })
    })
    return answer
}

// console.log(
//     count_same_elements(
//         [
//             "a", "a", "a",
//             "e", "e", "e", "e", "e", "e", "e",
//             "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
//             "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
//             "f", "f", "f", "f", "f", "f", "f", "f", "f",
//             "c:8",
//             "g", "g", "g", "g", "g", "g", "g",
//             "b", "b", "b", "b", "b", "b",
//             "d-5"
//         ]
//     )
// )

module.exports = count_same_elements;
