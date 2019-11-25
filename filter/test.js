const filter = require('./index');

const assert = require('assert');

describe("filter", function() {

    it('Должен вернуть массив с числами больше или равно 5', () => {
        let arr = [4,5,6];
        assert.deepEqual(arr.filter(m=>m<=5), [4,5]);
    });

    it('Должен вернуть пустой массив', () => {
        let arr = [4,5,6];
        assert.deepEqual(arr.filter(m=>m>10), []);
    });

    it('Пустой массив. Должен вернуть пустой массив', () => {
        let arr = [];
        assert.deepEqual(arr.filter(m=>m>10), []);
    });

    it('Массив строк. Должен вернуть массив с длинной слов больше 2', () => {
        let arr = ["раз", "раааааз", "рз", "р", "раааааааааз"];
        assert.deepEqual(arr.filter(m=>m.length>2), ["раз", "раааааз", "раааааааааз"]);
    });

    it('Массив строк. Должен вернуть пустой массив', () => {
        let arr = ["раз", "раааааз", "рз", "р", "раааааааааз"];
        assert.deepEqual(arr.filter(m=>m.length===21), []);
    });


});