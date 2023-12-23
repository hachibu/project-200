from typing import List

import utils


class Solution(utils.BaseSolution):
    def brute_force(self, nums: List[int], target: int) -> List[int]:
        for i, n in enumerate(nums):
            self.complexity.step()
            for j in range(i + 1, len(nums)):
                self.complexity.step()
                m = nums[j]
                if n + m == target:
                    return [i, j]
        return []

    def one_pass(self, nums: List[int], target: int) -> List[int]:
        m = {}
        self.complexity.store(m)
        for i, n in enumerate(nums):
            self.complexity.step()
            complement = target - n
            if complement in m:
                return [m[complement], i]
            m[n] = i
        return []


def test_solutions():
    tests = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
    ]
    s = Solution()

    for name, func in s.methods():
        for nums, target, expected in tests:
            assert func(nums, target) == expected, f"{name}"


def test_complexity():
    tests = [range(n) for n in range(100)]
    s = Solution()

    for name, func in s.methods():
        for nums in tests:
            func(nums, -1)
            s.complexity.mark(name, len(nums))

    s.complexity.plot()
