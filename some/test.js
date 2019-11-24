const some = require('./index');

const assert = require('assert');

describe("some", function() {
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

});