//реализация 1. map
//Метод 1. map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

Array.prototype.map = function(func){
    let resultArr = Array();
    for(let i=0; i<this.length; i++){
        resultArr.push(func(this[i]))
    }
    return resultArr;
}