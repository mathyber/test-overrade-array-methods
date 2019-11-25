//реализация 3. find
//Метод 3. find() возвращает значение первого найденного в массиве элемента,
//которое удовлетворяет условию переданному в callback функции.
//В противном случае возвращается undefined.

Array.prototype.find = function(func){
    for(let i=0; i<this.length; i++){
        if(func(this[i])) return this[i];
    }
    return undefined;
}