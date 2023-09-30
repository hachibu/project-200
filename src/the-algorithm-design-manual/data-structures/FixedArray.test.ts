export default class FixedArray<T> extends Array<T> {
    constructor(size: number) {
        super(size)
        Object.seal(this.fill(undefined))
    }
}

test('add property', () => {
    const arraySize = 2
    const array = new FixedArray<number>(arraySize)
    const j = arraySize + 1
    for (let i = 0; i < arraySize; i++) {
        array[i] = i
    }
    expect(() => (array[j] = 2)).toThrowError(
        `Cannot add property ${j}, object is not extensible`
    )
    expect(array).toEqual([0, 1])
})