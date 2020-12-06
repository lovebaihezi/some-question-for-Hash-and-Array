function count_same_elements(collection) {
    //在这里写入代码
    let map = new Map()
    let answer = []
    collection.forEach(
        item => {
            map.has(item) ?
                map.set(item, map.get(item) + 1) :
                map.set(item, 1)
        }
    )
    map.forEach((value, key) => {
        answer.push({ key, count: value })
    })
    return answer
}

count_same_elements([
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d", "d", "d", "d", "d"
])
module.exports = count_same_elements;
