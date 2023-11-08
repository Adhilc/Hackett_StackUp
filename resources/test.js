const arr = [1, 2, 3, 4, 5]


const res  = arr.forEach((val) => {
    console.log(val)
    return val * 2
})

const res2 = arr.map((val) => {
    console.log(val)
    return val * 2
})

console.log({
    res,
    res2
})