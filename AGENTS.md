# Repository Guide

## Overview

This repository contains TypeScript solutions and tests for LeetCode and custom
interview problems. It uses strict TypeScript, Node's built-in test runner, and
`tsx` to execute TypeScript without a build step.

Each LeetCode problem lives in its own directory under `problems/`:

```text
problems/<problem-slug>/
├── <problem-slug>.ts
└── <problem-slug>.spec.ts
```

Each custom interview problem lives in its own directory under
`custom-problems/`:

```text
custom-problems/<problem-slug>/
|-- <problem-slug>.ts
|-- <problem-slug>.spec.ts
`-- prompt.md
```

Shared data-structure helpers live under `utils/`. The current helpers build a
binary tree from a level-order array and convert a tree back to an array.

## Setup and Commands

Install dependencies:

```bash
npm install
```

Run the complete test suite:

```bash
npm test
```

Run one test file:

```bash
npx tsx --test problems/path-sum/path-sum.spec.ts
```

Run tests continuously while editing:

```bash
npm run test:watch
```

Type-check the repository:

```bash
npm run check
```

Compile the source files to readable JavaScript under the ignored `dist/`
directory:

```bash
npm run build
```

The build preserves the source directory structure and excludes test files,
declarations, and source maps. Run `npm run clean` to remove generated output.

Execute a solution file directly:

```bash
npm run solve -- problems/path-sum/path-sum.ts
```

Scaffold a new problem:

```bash
npm run new-problem -- "Problem Name"
```

The scaffold command creates the source and test files from a normalized,
lowercase kebab-case slug. It fails rather than overwriting an existing problem.

Scaffold a new custom interview problem:

```bash
npm run new-custom-problem -- "Problem Name"
```

Create a custom problem with an initial prompt:

```bash
npm run new-custom-problem -- "Problem Name" --prompt "Full prompt text"
```

The custom scaffold creates `custom-problems/<slug>/<slug>.ts`,
`custom-problems/<slug>/<slug>.spec.ts`, `custom-problems/<slug>/prompt.md`,
and updates `custom-problems/README.md`.

For an agent-assisted scaffold populated from official LeetCode metadata, invoke
the repository skill with a problem URL:

```text
/new-problem https://leetcode.com/problems/example-problem/
```

The skill creates a correctly typed implementation placeholder, executable
example tests, and the Problem Index entry without solving the challenge.

For custom interview prompts, invoke the repository skill with a title or pasted
prompt:

```text
$custom-problem Create a custom problem from this prompt: ...
```

The custom skill can also improve a custom `prompt.md` or generate executable
tests from it without solving the challenge.

## Implementation Conventions

- Keep one exported solution function per problem file.
- Do not change a solution implementation unless the user explicitly asks for a
  solution change. If you notice possible improvements while preparing tests,
  docs, commits, or other requested work, warn the user before committing rather
  than editing the algorithm unprompted.
- Use strict TypeScript types; avoid `any` and unsafe casts.
- Import types with `import type` when they are not used at runtime.
- Document the problem, the chosen algorithm, and its time and space complexity
  in the source file's JSDoc.
- Keep solution modules free of `console.log` examples and other import-time side
  effects.
- Prefer clear algorithmic names over abbreviated names, except for conventional
  terms such as `dfs`, `bfs`, `left`, and `right`.
- Reuse helpers from `utils/` for shared structures instead of duplicating them.
- Keep custom problem statements in `custom-problems/<slug>/prompt.md`; do not
  put custom interview prompts under `problems/`.

## Test Conventions

- Place tests beside the implementation in `<problem-slug>.spec.ts`.
- Use `node:test` for `describe` and `it`.
- Use `node:assert/strict` for assertions.
- Include the canonical examples plus meaningful edge cases.
- Cover empty input, minimal input, boundary behavior, and problem-specific
  invalid cases where applicable.
- Give test cases behavioral names that describe the expected result.
- Before committing, run both `npm test` and `npm run check`.

## Commit Style

Problem commits use this exact subject format:

```text
problem: <problem name>
```

Use the lowercase human-readable problem name, not a title-cased name or a
generic subject such as "add solution and tests."

Example:

```text
problem: path sum
```

For repository tooling or maintenance that is not a problem solution, use a
short conventional prefix that describes the change, such as:

```text
feat: add problem scaffolding
docs: add repository guide
test: expand tree utility coverage
fix: handle empty tree input
```

Keep each commit focused. Do not include unrelated files or generated output.

## Problem Index

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
| Count Integers in Intervals | [source](problems/count-integers-in-intervals/count-integers-in-intervals.ts) | [problem](https://leetcode.com/problems/count-integers-in-intervals/) |
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
| Kth Smallest Element in a BST | [source](problems/kth-smallest-element-in-a-bst/kth-smallest-element-in-a-bst.ts) | [problem](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |
| Longest Consecutive Sequence | [source](problems/longest-consecutive-sequence/longest-consecutive-sequence.ts) | [problem](https://leetcode.com/problems/longest-consecutive-sequence/) |
| Longest Substring Without Repeating Characters | [source](problems/longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.ts) | [problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| Maximum Depth of Binary Tree | [source](problems/maximum-depth-of-binary-tree/maximum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| Maximum Profit in Job Scheduling | [source](problems/maximum-profit-in-job-scheduling/maximum-profit-in-job-scheduling.ts) | [problem](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) |
| Maximum Product of Two Elements in an Array | [source](problems/maximum-product-of-two-elements-in-an-array/maximum-product-of-two-elements-in-an-array.ts) | [problem](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) |
| Merge Intervals | [source](problems/merge-intervals/merge-intervals.ts) | [problem](https://leetcode.com/problems/merge-intervals/) |
| Merge Sorted Array | [source](problems/merge-sorted-array/merge-sorted-array.ts) | [problem](https://leetcode.com/problems/merge-sorted-array/) |
| Minimum Absolute Difference in BST | [source](problems/minimum-absolute-difference-in-bst/minimum-absolute-difference-in-bst.ts) | [problem](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) |
| Minimum Depth of Binary Tree | [source](problems/minimum-depth-of-binary-tree/minimum-depth-of-binary-tree.ts) | [problem](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| Minimum Number of Arrows to Burst Balloons | [source](problems/minimum-number-of-arrows-to-burst-balloons/minimum-number-of-arrows-to-burst-balloons.ts) | [problem](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| Minimum Window Substring | [source](problems/minimum-window-substring/minimum-window-substring.ts) | [problem](https://leetcode.com/problems/minimum-window-substring/) |
| Number of Islands | [source](problems/number-of-islands/number-of-islands.ts) | [problem](https://leetcode.com/problems/number-of-islands/) |
| Path Sum | [source](problems/path-sum/path-sum.ts) | [problem](https://leetcode.com/problems/path-sum/) |
| Permutation in String | [source](problems/permutation-in-a-string/permutation-in-a-string.ts) | [problem](https://leetcode.com/problems/permutation-in-string/) |
| Product of Array Except Self | [source](problems/product-of-array-except-self/product-of-array-except-self.ts) | [problem](https://leetcode.com/problems/product-of-array-except-self/) |
| Ransom Note | [source](problems/ransom-note/ransom-note.ts) | [problem](https://leetcode.com/problems/ransom-note/) |
| Rotting Oranges | [source](problems/rotting-oranges/rotting-oranges.ts) | [problem](https://leetcode.com/problems/rotting-oranges/) |
| Same Tree | [source](problems/same-tree/same-tree.ts) | [problem](https://leetcode.com/problems/same-tree/) |
| Subarray Sum Equals K | [source](problems/subarray-sum-equals-k/subarray-sum-equals-k.ts) | [problem](https://leetcode.com/problems/subarray-sum-equals-k/) |
| Summary Ranges | [source](problems/summary-ranges/summary-ranges.ts) | [problem](https://leetcode.com/problems/summary-ranges/) |
| Symmetric Tree | [source](problems/symmetric-tree/symmetric-tree.ts) | [problem](https://leetcode.com/problems/symmetric-tree/) |
| Top K Frequent Elements | [source](problems/top-k-frequent-elements/top-k-frequent-elements.ts) | [problem](https://leetcode.com/problems/top-k-frequent-elements/) |
| Two Sum | [source](problems/two-sum/two-sum.ts) | [problem](https://leetcode.com/problems/two-sum/) |
| Valid Anagram | [source](problems/valid-anagram/valid-anagram.ts) | [problem](https://leetcode.com/problems/valid-anagram/) |
| Validate Binary Search Tree | [source](problems/validate-binary-search-tree/validate-binary-search-tree.ts) | [problem](https://leetcode.com/problems/validate-binary-search-tree/) |
| Word Break | [source](problems/word-break/word-break.ts) | [problem](https://leetcode.com/problems/word-break/) |
| Word Break II | [source](problems/word-break-ii/word-break-ii.ts) | [problem](https://leetcode.com/problems/word-break-ii/) |
| Word Ladder | [source](problems/word-ladder/word-ladder.ts) | [problem](https://leetcode.com/problems/word-ladder/) |
| Word Pattern | [source](problems/word-pattern/word-pattern.ts) | [problem](https://leetcode.com/problems/word-pattern/) |

When adding a problem, add it alphabetically to this index and the README.md
Solved Problems table in the same commit.

## Custom Problem Index

Custom interview problems are indexed in
[`custom-problems/README.md`](custom-problems/README.md). Add custom problems
with `npm run new-custom-problem -- "Problem Name"` or the `$custom-problem`
skill instead of editing the index manually.

## Shared Utilities

- [`buildTree`](utils/array-to-tree/build-tree.ts) converts a level-order array
  containing numbers and `null` placeholders into a binary tree.
- [`treeToArray`](utils/tree-to-array/tree-to-array.ts) converts a binary tree
  into a trimmed level-order array.

Add tests for utility changes because multiple problem solutions may depend on
their behavior.
