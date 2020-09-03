// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length
    while (j > i) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      }
      j--
    }
  }
  return nums.length
}

let testEach = test.each([
  [[1, 1, 2], 2],
  [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5]
])

testEach('removeDuplicates(%p)', (a, expected) =>
  expect(removeDuplicates(a)).toStrictEqual(expected)
)