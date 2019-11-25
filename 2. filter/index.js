//реализация
//Метод 2. filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

Array.prototype.filter = function(func){
    let resultArr = Array();
    for(let i=0; i<this.length; i++){
        if(func(this[i])) resultArr.push(this[i])
    }
    return resultArr;
}