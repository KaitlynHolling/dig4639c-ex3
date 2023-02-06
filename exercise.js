let arrays = [[1,2,3], [4,5], [6]];

export function flattening(list) {
    let result = list.reduce((previousValue, currentValue) => {
        console.log(previousValue)
        console.log(currentValue)

        let combinedValue = previousValue.concat(currentValue)
        console.log("combin" + combinedValue)
        return combinedValue
    })
    return result
}

console.log(flattening(arrays))

//3.2

export function loop (value, test, update, body){
    let curValue = value
    while(true) {
        console.log("Iteration, curValue" + curValue)
        if (test(value)) {
            console.log("calling body")
            body(curValue)
            curValue = update(curValue)
        } else {
            break;
        }
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//3.3 & 3.4

export function everyLoop(array,test) {
    let curResult = true
    for(let item of array) {
       // console.log(test(item))
       curResult = curResult && test(item)
    }
    return curResult
}


export function everySome(array,test) {
    return !array.some((value)=>!test(value))
}

console.log("Should be true")
console.log(everySome([1,3,5], n => n < 10));
// true
console.log("Should be false")
console.log(everySome([2,4,16], n => n < 10));

console.log("Should be true")
console.log(everySome([], n => n < 10));