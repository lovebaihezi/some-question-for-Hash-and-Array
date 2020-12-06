function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    collection_b = collection_b.flat()
    return collection_a.filter(item => collection_b.includes(item))
}

module.exports = collect_same_elements;
