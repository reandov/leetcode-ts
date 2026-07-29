# dsa-ts

TypeScript data structures, algorithms, theory notes, and coding problem
practice.

The repository is set up for strict TypeScript, Node's built-in test runner, and
`tsx`, so implementations and tests can run without a separate build step.

## Project Structure

```text
src/
|-- algorithms/
|   `-- <algorithm-slug>/
|-- data-structures/
|   `-- <data-structure-slug>/
`-- problems/
    |-- leetcode/<problem-slug>/
    `-- custom/<problem-slug>/

src/problems/leetcode/<problem-slug>/
|-- <problem-slug>.ts
`-- <problem-slug>.spec.ts

src/problems/custom/<problem-slug>/
|-- <problem-slug>.ts
|-- <problem-slug>.spec.ts
`-- prompt.md

docs/
|-- theory/
`-- patterns/
```

From-scratch study implementations live under `src/algorithms/` and
`src/data-structures/`. They are for learning how the algorithm or structure
works, not primarily for reuse inside problem solutions. LeetCode and custom
interview problems live under `src/problems/`. Study notes live under `docs/`.

Agent-specific workflows live under `.agents/skills/`. The repository skills
scaffold LeetCode problems, custom problems, algorithm studies, data-structure
studies, and theory notes.

## Commands

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm test
```

Run one test file:

```bash
npx tsx --test src/problems/leetcode/path-sum/path-sum.spec.ts
```

Type-check the repository:

```bash
npm run check
```

Build readable JavaScript into `dist/`:

```bash
npm run build
```

Scaffold a new problem:

```bash
npm run new-leetcode -- "Problem Name"
```

Scaffold a new custom interview problem:

```bash
npm run new-custom-problem -- "Problem Name"
```

Create a custom problem with an initial prompt:

```bash
npm run new-custom-problem -- "Problem Name" --prompt "Full prompt text"
```

Scaffold DSA study material:

```bash
npm run new-algorithm -- "Binary Search Lower Bound"
npm run new-data-structure -- "Union Find"
npm run new-theory -- "Sliding Window"
```

Compatibility aliases remain available for existing habits:

```bash
npm run new-problem -- "Problem Name"
```

## Navigation

- [Algorithms](src/algorithms/README.md)
- [Data Structures](src/data-structures/README.md)
- [Problems](src/problems/README.md)
- [Theory](docs/theory/README.md)
- [Patterns](docs/patterns/README.md)

## Solved Problems

| Problem | Solution | LeetCode |
| --- | --- | --- |
| Average of Levels in Binary Tree | [source](src/problems/leetcode/average-of-levels-in-binary-tree/average-of-levels-in-binary-tree.ts) | [problem](https://leetcode.com/problems/average-of-levels-in-binary-tree/) |
| Best Time to Buy and Sell Stock | [source](src/problems/leetcode/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock.ts) | [problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| Binary Search | [source](src/problems/leetcode/binary-search/binary-search.ts) | [problem](https://leetcode.com/problems/binary-search/) |
| Binary Tree Inorder Traversal | [source](src/problems/leetcode/binary-tree-inorder-traversal/binary-tree-inorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| Binary Tree Level Order Traversal | [source](src/problems/leetcode/binary-tree-level-order-traversal/binary-tree-level-order-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| Binary Tree Postorder Traversal | [source](src/problems/leetcode/binary-tree-postorder-traversal/binary-tree-postorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-postorder-traversal/) |
| Binary Tree Preorder Traversal | [source](src/problems/leetcode/binary-tree-preorder-traversal/binary-tree-preorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-preorder-traversal/) |
| Bus Routes | [source](src/problems/leetcode/bus-routes/bus-routes.ts) | [problem](https://leetcode.com/problems/bus-routes/) |
| Contains Duplicate | [source](src/problems/leetcode/contains-duplicate/contains-duplicate.ts) | [problem](https://leetcode.com/problems/contains-duplicate/) |
| Count Integers in Intervals | [source](src/problems/leetcode/count-integers-in-intervals/count-integers-in-intervals.ts) | [problem](https://leetcode.com/problems/count-integers-in-intervals/) |
| Course Schedule II | [source](src/problems/leetcode/course-schedule-ii/course-schedule-ii.ts) | [problem](https://leetcode.com/problems/course-schedule-ii/) |
| Find All Anagrams in a String | [source](src/problems/leetcode/find-all-anagrams-in-a-string/find-all-anagrams-in-a-string.ts) | [problem](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| Find Center of Star Graph | [source](src/problems/leetcode/find-center-of-star-graph/find-center-of-star-graph.ts) | [problem](https://leetcode.com/problems/find-center-of-star-graph/) |
| Find if Path Exists in Graph | [source](src/problems/leetcode/find-if-path-exists-in-graph/find-if-path-exists-in-graph.ts) | [problem](https://leetcode.com/problems/find-if-path-exists-in-graph/) |
| Find the Town Judge | [source](src/problems/leetcode/find-the-town-judge/find-the-town-judge.ts) | [problem](https://leetcode.com/problems/find-the-town-judge/) |
| Group Anagrams | [source](src/problems/leetcode/group-anagrams/group-anagrams.ts) | [problem](https://leetcode.com/problems/group-anagrams/) |
| House Robber III | [source](src/problems/leetcode/house-robber-iii/house-robber-iii.ts) | [problem](https://leetcode.com/problems/house-robber-iii/) |
| Intersection of Two Arrays | [source](src/problems/leetcode/intersection-of-two-arrays-i/intersection-of-two-arrays-i.ts) | [problem](https://leetcode.com/problems/intersection-of-two-arrays/) |
| Intersection of Two Arrays II | [source](src/problems/leetcode/intersection-of-two-arrays-ii/intersection-of-two-arrays-ii.ts) | [problem](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |
| Insert Interval | [source](src/problems/leetcode/insert-interval/insert-interval.ts) | [problem](https://leetcode.com/problems/insert-interval/) |
| Invert Binary Tree | [source](src/problems/leetcode/invert-binary-tree/invert-binary-tree.ts) | [problem](https://leetcode.com/problems/invert-binary-tree/) |
| Isomorphic Strings | [source](src/problems/leetcode/isomorphic-strings/isomorphic-strings.ts) | [problem](https://leetcode.com/problems/isomorphic-strings/) |
| Kth Smallest Element in a BST | [source](src/problems/leetcode/kth-smallest-element-in-a-bst/kth-smallest-element-in-a-bst.ts) | [problem](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |
| Longest Consecutive Sequence | [source](src/problems/leetcode/longest-consecutive-sequence/longest-consecutive-sequence.ts) | [problem](https://leetcode.com/problems/longest-consecutive-sequence/) |
| Longest Substring Without Repeating Characters | [source](src/problems/leetcode/longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.ts) | [problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| Maximum Depth of Binary Tree | [source](src/problems/leetcode/maximum-depth-of-binary-tree/maximum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| Maximum Profit in Job Scheduling | [source](src/problems/leetcode/maximum-profit-in-job-scheduling/maximum-profit-in-job-scheduling.ts) | [problem](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) |
| Maximum Product of Two Elements in an Array | [source](src/problems/leetcode/maximum-product-of-two-elements-in-an-array/maximum-product-of-two-elements-in-an-array.ts) | [problem](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) |
| Merge Intervals | [source](src/problems/leetcode/merge-intervals/merge-intervals.ts) | [problem](https://leetcode.com/problems/merge-intervals/) |
| Merge Sorted Array | [source](src/problems/leetcode/merge-sorted-array/merge-sorted-array.ts) | [problem](https://leetcode.com/problems/merge-sorted-array/) |
| Minimum Absolute Difference in BST | [source](src/problems/leetcode/minimum-absolute-difference-in-bst/minimum-absolute-difference-in-bst.ts) | [problem](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) |
| Minimum Depth of Binary Tree | [source](src/problems/leetcode/minimum-depth-of-binary-tree/minimum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| Minimum Number of Arrows to Burst Balloons | [source](src/problems/leetcode/minimum-number-of-arrows-to-burst-balloons/minimum-number-of-arrows-to-burst-balloons.ts) | [problem](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| Minimum Window Substring | [source](src/problems/leetcode/minimum-window-substring/minimum-window-substring.ts) | [problem](https://leetcode.com/problems/minimum-window-substring/) |
| Number of Islands | [source](src/problems/leetcode/number-of-islands/number-of-islands.ts) | [problem](https://leetcode.com/problems/number-of-islands/) |
| Path Sum | [source](src/problems/leetcode/path-sum/path-sum.ts) | [problem](https://leetcode.com/problems/path-sum/) |
| Permutation in String | [source](src/problems/leetcode/permutation-in-a-string/permutation-in-a-string.ts) | [problem](https://leetcode.com/problems/permutation-in-string/) |
| Product of Array Except Self | [source](src/problems/leetcode/product-of-array-except-self/product-of-array-except-self.ts) | [problem](https://leetcode.com/problems/product-of-array-except-self/) |
| Ransom Note | [source](src/problems/leetcode/ransom-note/ransom-note.ts) | [problem](https://leetcode.com/problems/ransom-note/) |
| Remove Element | [source](src/problems/leetcode/remove-element/remove-element.ts) | [problem](https://leetcode.com/problems/remove-element/) |
| Rotting Oranges | [source](src/problems/leetcode/rotting-oranges/rotting-oranges.ts) | [problem](https://leetcode.com/problems/rotting-oranges/) |
| Same Tree | [source](src/problems/leetcode/same-tree/same-tree.ts) | [problem](https://leetcode.com/problems/same-tree/) |
| Smallest Palindromic Rearrangement I | [source](src/problems/leetcode/smallest-palindromic-rearrangement-i/smallest-palindromic-rearrangement-i.ts) | [problem](https://leetcode.com/problems/smallest-palindromic-rearrangement-i/) |
| Subarray Sum Equals K | [source](src/problems/leetcode/subarray-sum-equals-k/subarray-sum-equals-k.ts) | [problem](https://leetcode.com/problems/subarray-sum-equals-k/) |
| Summary Ranges | [source](src/problems/leetcode/summary-ranges/summary-ranges.ts) | [problem](https://leetcode.com/problems/summary-ranges/) |
| Symmetric Tree | [source](src/problems/leetcode/symmetric-tree/symmetric-tree.ts) | [problem](https://leetcode.com/problems/symmetric-tree/) |
| Top K Frequent Elements | [source](src/problems/leetcode/top-k-frequent-elements/top-k-frequent-elements.ts) | [problem](https://leetcode.com/problems/top-k-frequent-elements/) |
| Two Sum | [source](src/problems/leetcode/two-sum/two-sum.ts) | [problem](https://leetcode.com/problems/two-sum/) |
| Valid Anagram | [source](src/problems/leetcode/valid-anagram/valid-anagram.ts) | [problem](https://leetcode.com/problems/valid-anagram/) |
| Validate Binary Search Tree | [source](src/problems/leetcode/validate-binary-search-tree/validate-binary-search-tree.ts) | [problem](https://leetcode.com/problems/validate-binary-search-tree/) |
| Word Break | [source](src/problems/leetcode/word-break/word-break.ts) | [problem](https://leetcode.com/problems/word-break/) |
| Word Break II | [source](src/problems/leetcode/word-break-ii/word-break-ii.ts) | [problem](https://leetcode.com/problems/word-break-ii/) |
| Word Ladder | [source](src/problems/leetcode/word-ladder/word-ladder.ts) | [problem](https://leetcode.com/problems/word-ladder/) |
| Word Pattern | [source](src/problems/leetcode/word-pattern/word-pattern.ts) | [problem](https://leetcode.com/problems/word-pattern/) |

## Custom Problems

Custom problem prompts and sources are indexed in
[src/problems/custom/README.md](src/problems/custom/README.md).

## Conventions

- Keep one exported solution function, algorithm function, or data-structure
  class per implementation file unless the topic naturally requires a small
  helper type.
- Document the problem or study topic, approach, time complexity, and space
  complexity in JSDoc.
- Keep tests beside the implementation.
- Keep custom problem statements in `src/problems/custom/<slug>/prompt.md`.
- Keep algorithm study implementations in `src/algorithms/<slug>/` with local
  notes and tests. They may define their own local types or examples when that
  makes the concept clearer.
- Keep data-structure study implementations in `src/data-structures/<slug>/`
  with local notes and tests.
- Keep problem solutions self-contained unless importing a shared helper clearly
  improves clarity.
- Keep conceptual notes in `docs/theory/` or `docs/patterns/`.
- Use `node:test` and `node:assert/strict`.
- Prefer focused tests covering canonical examples and meaningful edge cases.
- Keep modules free of import-time side effects.
