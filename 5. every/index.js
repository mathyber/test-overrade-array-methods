//реализация 5. every
//Метод 5. every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

Array.prototype.every = function(func){
    for(let i=0; i<this.length; i++){
        if(!func(this[i])) return false;
    }
    return true;
}
