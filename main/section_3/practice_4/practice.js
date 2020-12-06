function count_same_elements(collection) {
    //在这里写入代码
    let map = new Map()
    let answer = []
    collection.forEach(
        item => {
            let count = 1;
            if (item.toString().match(/(-|:|\[)\d+/))
                count = Math.abs(Number.parseInt(item.toString().replace(/\w+(-|:|\[)/g, '')))
            item = item.toString().match(/[^-]/g)[0]
            map.has(item) ?
                map.set(item, map.get(item) + count) :
                map.set(item, count)
        }
    );
    map.forEach((value, key) => {
        answer.push({ count: value, key })
    })
    return answer
}

function create_updated_collectionA(collection_a, object_b) {
    //在这里写入代码
    return collection_a.map(item =>
        object_b.value.includes(item.key) ? { key: item.key, count: item.count - (item.count - item.count % 3) / 3 }
            : { key: item.key, count: item.count }
    )
}

function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    // let a = 
    return create_updated_collectionA(count_same_elements(collection_a), object_b)
}



module.exports = create_updated_collection;
