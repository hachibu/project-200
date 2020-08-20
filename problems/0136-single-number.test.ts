// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  let counts: { [key:string]: number } = {}
  for (let n of nums) {
    if (n in counts) {
      counts[n] += 1
    } else {
      counts[n] = 1
    }
  }
  for (let n of nums) {
    if (counts[n] === 1) {
      return n
    }
  }
  return 0
}

test('singleNumber', () => {
  expect(singleNumber([1])).toEqual(1)
  expect(singleNumber([1, 0, 1])).toEqual(0)
  expect(singleNumber([2, 2, 1])).toEqual(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})