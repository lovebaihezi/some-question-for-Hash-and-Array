function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    return collection_a.map(item =>
        object_b.value.includes(item.key) ? { key: item.key, count: item.count - (item.count - item.count % 3) / 3 }
            : { key: item.key, count: item.count }
    )
}

module.exports = create_updated_collection;
