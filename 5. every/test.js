const every = require('./index');

const assert = require('assert');

describe("every", function() {

    it('Возвращаемый тип данных должен быть boolean', () => {
        let arr = [4,5,6];
        assert.equal(typeof arr.every(ss => ss<10), 'boolean');
    });

    it('Массив чисел. Должен вернуть true', () => {
        let arr = [4,5,6];
        assert.equal(arr.every(ss => ss<10), true);
    });

    it('Массив чисел. Должен вернуть false', () => {
        let arr = [4,5,6];
        assert.equal(arr.every(ss => ss>10), false);
    });

    it('Должен вернуть true при любом условии для пустого массива', () => {
        let arr = [];
        assert.equal(arr.every(ss => ss>10), true);
    });

    it('Массив строк. Должен вернуть false', () => {
        let arr = ["раз", "два", "три"];
        assert.equal(arr.every(ss => ss==="три"), false);
    });

    it('Массив строк. Должен вернуть true', () => {
        let arr = ["раз", "два", "три"];
        assert.equal(arr.every(ss => ss.length===3), true);
    });
});