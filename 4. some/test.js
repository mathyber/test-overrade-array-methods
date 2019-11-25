const some = require('./index');

const assert = require('assert');

describe("some", function() {

    it('Возвращаемый тип данных должен быть boolean', () => {
        let arr = [4,5,6];
        assert.equal(typeof arr.some(m => m<10), 'boolean');
    });

    it('Должен вернуть true', () => {
        let arr = [4,5,6];
        assert.equal(arr.some(m=>m>5), true);
    });

    it('Должен вернуть false', () => {
        let arr = [4,5,6];
        assert.equal(arr.some(m=>m>10), false);
    });

    it('Должен вернуть false для пустого массива', () => {
        let arr = [];
        assert.equal(arr.some(m=>m>10), false);
    });

    it('Массив строк. Должен вернуть false', () => {
        let arr = ["раз", "два", "три"];
        assert.equal(arr.some(ss => ss==="четыре"), false);
    });

    it('Массив строк. Должен вернуть true', () => {
        let arr = ["раз", "дваа", "три"];
        assert.equal(arr.some(ss => ss.length===3), true);
    });
});