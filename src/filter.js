
const filter = (numbers,filterFunction) => {
    let evenNumbers = [];
    for(let index = 0; index < numbers.length; index++){
        if(filterFunction(numbers[index]))
            evenNumbers.push(numbers[index]);
    }
    return evenNumbers;
}

module.exports = filter;