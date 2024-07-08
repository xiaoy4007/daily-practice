function getSequence(arr) {
    const len = arr.length
    const result = [0] // 默认以数组中第0个为基准来做序列，注意！！存放的是数组索引，不是值
    let resultLastIndex

    for (let i = 0; i < len; i++) {
        let arrI = arr[i]
        if (arrI !== 0) {
            resultLastIndex = result[result.length - 1]
            if(arrI > arr[resultLastIndex]) {
                result.push(i)
                continue
            }
        }
    }
    return result
}
const arr = [15, 11, 9, 13, 14, 6, 16, 10]
const result = getSequence(arr)
console.log(result);
console.log(getSequenceVal(result));

function getSequenceVal (indexArr) {
    return indexArr.map(index => arr[index])
}
// 这个的问题就是，如果第一个索引的元素如果比后面大，就会造成得到的最长递增子序列是错的