//реализация some
//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

Array.prototype.some = function(func){
    for(let i=0; i<this.length; i++){
        if(func(this[i])) return true;
    }
    return false;
}