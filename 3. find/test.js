const find = require('./index');

const assert = require('assert');

describe("find", function() {
    it('Массив чисел. Должен вернуть 5', () => {
        let arr = [4,5,6];
        assert.equal(arr.find(m=>m>4), 5);
    });

    it('Массив чисел. Должен вернуть undefined', () => {
        let arr = [4,5,6];
        assert.equal(arr.find(m=>m>10), undefined);
    });

    it('Пустой массив. Должен вернуть undefined', () => {
        let arr = [];
        assert.deepEqual(arr.find(m=>m>10), undefined);
    });

    it('Массив строк. Должен вернуть "раз"', () => {
        let arr = ["рааз", "раз", "рааааз"];
        assert.equal(arr.find(m=>m.length===3), "раз");
    });

    it('Массив строк. Должен вернуть undefined', () => {
        let arr = ["рааз", "раз", "рааааз"];
        assert.equal(arr.find(m=>m.length===8), undefined);
    });
});