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

});