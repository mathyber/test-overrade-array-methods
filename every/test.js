const every = require('./index');

const assert = require('assert');

describe("every", function() {
    it('Должен вернуть true', () => {
        let arr = [4,5,6];
        assert.equal(arr.every(ss => ss<10), true);
    });

    it('Должен вернуть false', () => {
        let arr = [4,5,6];
        assert.equal(arr.every(ss => ss>10), false);
    });

    it('Должен вернуть true при любом условии для пустого массива', () => {
        let arr = [];
        assert.equal(arr.every(ss => ss>10), true);
    });

});