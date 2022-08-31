
const reduce = (numbers, reduceFunction, initialValue = 0) => {
    let sum = initialValue;
    for(let index = 0; index < numbers.length; index++){
        sum = reduceFunction(sum,numbers[index]);
    }
    return sum;
}

module.exports = reduce;
