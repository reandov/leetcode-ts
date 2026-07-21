# leetcode-ts

TypeScript solutions and tests for LeetCode problems.

The repository is set up for strict TypeScript, Node's built-in test runner, and
`tsx`, so solutions can be written and tested without a separate build step.
Each problem lives in its own directory under `problems/`, beside its test file.

## Project Structure

```text
problems/<problem-slug>/
|-- <problem-slug>.ts
`-- <problem-slug>.spec.ts
```

Shared helpers live under `utils/`. Current utilities include binary tree
builders and serializers used by tree problems.

Agent-specific workflows live under `.agents/skills/`. The
`problem-understanding` skill is included to analyze coding prompts, examples,
constraints, patterns, and edge cases without jumping straight to code.

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
npx tsx --test problems/path-sum/path-sum.spec.ts
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
npm run new-problem -- "Problem Name"
```

## Solved Problems

| Problem | Solution | LeetCode |
| --- | --- | --- |
| Average of Levels in Binary Tree | [source](problems/average-of-levels-in-binary-tree/average-of-levels-in-binary-tree.ts) | [problem](https://leetcode.com/problems/average-of-levels-in-binary-tree/) |
| Best Time to Buy and Sell Stock | [source](problems/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock.ts) | [problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| Binary Search | [source](problems/binary-search/binary-search.ts) | [problem](https://leetcode.com/problems/binary-search/) |
| Binary Tree Inorder Traversal | [source](problems/binary-tree-inorder-traversal/binary-tree-inorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| Binary Tree Level Order Traversal | [source](problems/binary-tree-level-order-traversal/binary-tree-level-order-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| Binary Tree Postorder Traversal | [source](problems/binary-tree-postorder-traversal/binary-tree-postorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-postorder-traversal/) |
| Binary Tree Preorder Traversal | [source](problems/binary-tree-preorder-traversal/binary-tree-preorder-traversal.ts) | [problem](https://leetcode.com/problems/binary-tree-preorder-traversal/) |
| Bus Routes | [source](problems/bus-routes/bus-routes.ts) | [problem](https://leetcode.com/problems/bus-routes/) |
| Contains Duplicate | [source](problems/contains-duplicate/contains-duplicate.ts) | [problem](https://leetcode.com/problems/contains-duplicate/) |
| Course Schedule II | [source](problems/course-schedule-ii/course-schedule-ii.ts) | [problem](https://leetcode.com/problems/course-schedule-ii/) |
| Find All Anagrams in a String | [source](problems/find-all-anagrams-in-a-string/find-all-anagrams-in-a-string.ts) | [problem](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| Find Center of Star Graph | [source](problems/find-center-of-star-graph/find-center-of-star-graph.ts) | [problem](https://leetcode.com/problems/find-center-of-star-graph/) |
| Find if Path Exists in Graph | [source](problems/find-if-path-exists-in-graph/find-if-path-exists-in-graph.ts) | [problem](https://leetcode.com/problems/find-if-path-exists-in-graph/) |
| Find the Town Judge | [source](problems/find-the-town-judge/find-the-town-judge.ts) | [problem](https://leetcode.com/problems/find-the-town-judge/) |
| Group Anagrams | [source](problems/group-anagrams/group-anagrams.ts) | [problem](https://leetcode.com/problems/group-anagrams/) |
| House Robber III | [source](problems/house-robber-iii/house-robber-iii.ts) | [problem](https://leetcode.com/problems/house-robber-iii/) |
| Intersection of Two Arrays | [source](problems/intersection-of-two-arrays-i/intersection-of-two-arrays-i.ts) | [problem](https://leetcode.com/problems/intersection-of-two-arrays/) |
| Intersection of Two Arrays II | [source](problems/intersection-of-two-arrays-ii/intersection-of-two-arrays-ii.ts) | [problem](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |
| Insert Interval | [source](problems/insert-interval/insert-interval.ts) | [problem](https://leetcode.com/problems/insert-interval/) |
| Invert Binary Tree | [source](problems/invert-binary-tree/invert-binary-tree.ts) | [problem](https://leetcode.com/problems/invert-binary-tree/) |
| Isomorphic Strings | [source](problems/isomorphic-strings/isomorphic-strings.ts) | [problem](https://leetcode.com/problems/isomorphic-strings/) |
| Longest Consecutive Sequence | [source](problems/longest-consecutive-sequence/longest-consecutive-sequence.ts) | [problem](https://leetcode.com/problems/longest-consecutive-sequence/) |
| Longest Substring Without Repeating Characters | [source](problems/longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.ts) | [problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| Maximum Depth of Binary Tree | [source](problems/maximum-depth-of-binary-tree/maximum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| Maximum Profit in Job Scheduling | [source](problems/maximum-profit-in-job-scheduling/maximum-profit-in-job-scheduling.ts) | [problem](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) |
| Merge Intervals | [source](problems/merge-intervals/merge-intervals.ts) | [problem](https://leetcode.com/problems/merge-intervals/) |
| Merge Sorted Array | [source](problems/merge-sorted-array/merge-sorted-array.ts) | [problem](https://leetcode.com/problems/merge-sorted-array/) |
| Minimum Depth of Binary Tree | [source](problems/minimum-depth-of-binary-tree/minimum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| Minimum Window Substring | [source](problems/minimum-window-substring/minimum-window-substring.ts) | [problem](https://leetcode.com/problems/minimum-window-substring/) |
| Number of Islands | [source](problems/number-of-islands/number-of-islands.ts) | [problem](https://leetcode.com/problems/number-of-islands/) |
| Path Sum | [source](problems/path-sum/path-sum.ts) | [problem](https://leetcode.com/problems/path-sum/) |
| Permutation in String | [source](problems/permutation-in-a-string/permutation-in-a-string.ts) | [problem](https://leetcode.com/problems/permutation-in-string/) |
| Product of Array Except Self | [source](problems/product-of-array-except-self/product-of-array-except-self.ts) | [problem](https://leetcode.com/problems/product-of-array-except-self/) |
| Ransom Note | [source](problems/ransom-note/ransom-note.ts) | [problem](https://leetcode.com/problems/ransom-note/) |
| Rotting Oranges | [source](problems/rotting-oranges/rotting-oranges.ts) | [problem](https://leetcode.com/problems/rotting-oranges/) |
| Same Tree | [source](problems/same-tree/same-tree.ts) | [problem](https://leetcode.com/problems/same-tree/) |
| Subarray Sum Equals K | [source](problems/subarray-sum-equals-k/subarray-sum-equals-k.ts) | [problem](https://leetcode.com/problems/subarray-sum-equals-k/) |
| Symmetric Tree | [source](problems/symmetric-tree/symmetric-tree.ts) | [problem](https://leetcode.com/problems/symmetric-tree/) |
| Top K Frequent Elements | [source](problems/top-k-frequent-elements/top-k-frequent-elements.ts) | [problem](https://leetcode.com/problems/top-k-frequent-elements/) |
| Two Sum | [source](problems/two-sum/two-sum.ts) | [problem](https://leetcode.com/problems/two-sum/) |
| Valid Anagram | [source](problems/valid-anagram/valid-anagram.ts) | [problem](https://leetcode.com/problems/valid-anagram/) |
| Word Break | [source](problems/word-break/word-break.ts) | [problem](https://leetcode.com/problems/word-break/) |
| Word Break II | [source](problems/word-break-ii/word-break-ii.ts) | [problem](https://leetcode.com/problems/word-break-ii/) |
| Word Ladder | [source](problems/word-ladder/word-ladder.ts) | [problem](https://leetcode.com/problems/word-ladder/) |
| Word Pattern | [source](problems/word-pattern/word-pattern.ts) | [problem](https://leetcode.com/problems/word-pattern/) |

## Conventions

- Keep one exported solution function per problem file.
- Document the problem, approach, time complexity, and space complexity in the
  solution JSDoc.
- Keep tests beside the implementation.
- Use `node:test` and `node:assert/strict`.
- Prefer focused tests covering canonical examples and meaningful edge cases.
- Keep solution modules free of import-time side effects.
