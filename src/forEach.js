const forEach = (numbers, forEachFunction) =>{
    for(let index = 0; index<numbers.length; index++){
        forEachFunction(numbers[index]);
    }
}

module.exports = forEach;