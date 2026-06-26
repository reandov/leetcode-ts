/*
 * CONTAINS DUPLICATE
 *
 * Description: Easy problem that we need to investigate if a given array has
 * at least a pair of repeated values. E.g.: [1, 2, 3, 1] returns true.
 *
 * Solution: Another problem that could be solved using brute force but for
 * optimal performance a Set should be used to add elements as we iterate over
 * the array of numbers and check their existence in the ongoing set.
 */
export function containsDuplicate(nums: number[]): boolean {
  if (!nums.length) return false;

  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }

  return false;
}
