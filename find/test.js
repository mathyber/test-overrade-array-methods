const find = require('./index');

const assert = require('assert');

describe("find", function() {
    it('Должен вернуть 5', () => {
        let arr = [4,5,6];
        assert.equal(arr.find(m=>m>4), 5);
    });

    it('Должен вернуть undefined', () => {
        let arr = [4,5,6];
        assert.equal(arr.find(m=>m>10), undefined);
    });

});