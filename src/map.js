const map = (numbers, mapFunction) => {
    let multiplesOfThree = [];
    for(let index = 0; index<numbers.length; index++){
        multiplesOfThree.push(mapFunction(numbers[index]));
    }
    return multiplesOfThree;
 }

 module.exports = map;

