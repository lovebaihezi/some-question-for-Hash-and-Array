function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    return collection_a.filter(item => object_b.value.includes(item))
}

module.exports = collect_same_elements;
