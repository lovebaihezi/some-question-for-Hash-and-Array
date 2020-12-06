function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    return collection_a.filter(item => object_b.value.includes(item.key)).map(item => item.key)
}

module.exports = collect_same_elements;
