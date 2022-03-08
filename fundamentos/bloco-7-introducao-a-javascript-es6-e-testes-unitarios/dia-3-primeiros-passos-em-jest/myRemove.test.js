const myRemove = require('./myRemove');

test('return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})

test('do not return the same array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})

test('return the expected array when the parameter doesnt exists in the array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

