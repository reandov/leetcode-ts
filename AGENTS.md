# Repository Guide

## Overview

This repository contains TypeScript data structures, algorithms, theory notes,
and coding problem practice. It uses strict TypeScript, Node's built-in test
runner, and `tsx` to execute TypeScript without a build step.

The main repository shape is:

```text
src/
|-- algorithms/
|-- data-structures/
`-- problems/
    |-- leetcode/
    `-- custom/

docs/
|-- theory/
`-- patterns/
```

Each LeetCode problem lives in its own directory under
`src/problems/leetcode/`:

```text
src/problems/leetcode/<problem-slug>/
|-- <problem-slug>.ts
`-- <problem-slug>.spec.ts
```

Each custom interview problem lives in its own directory under
`src/problems/custom/`:

```text
src/problems/custom/<problem-slug>/
|-- <problem-slug>.ts
|-- <problem-slug>.spec.ts
`-- prompt.md
```

From-scratch algorithm study implementations live under
`src/algorithms/<slug>/`. From-scratch data-structure study implementations and
shared helpers live under `src/data-structures/<slug>/`. These folders are for
learning how the concepts work, not primarily for reuse inside problem
solutions. The current tree helpers build a binary tree from a level-order
array and convert a tree back to an array.

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
npx tsx --test src/problems/leetcode/path-sum/path-sum.spec.ts
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
npm run solve -- src/problems/leetcode/path-sum/path-sum.ts
```

Scaffold a new LeetCode problem:

```bash
npm run new-leetcode -- "Problem Name"
```

`npm run new-problem -- "Problem Name"` remains as a compatibility alias. The
scaffold command creates the source and test files from a normalized, lowercase
kebab-case slug. It fails rather than overwriting an existing problem.

Scaffold a new custom interview problem:

```bash
npm run new-custom-problem -- "Problem Name"
```

Create a custom problem with an initial prompt:

```bash
npm run new-custom-problem -- "Problem Name" --prompt "Full prompt text"
```

The custom scaffold creates `src/problems/custom/<slug>/<slug>.ts`,
`src/problems/custom/<slug>/<slug>.spec.ts`, `src/problems/custom/<slug>/prompt.md`,
and updates `src/problems/custom/README.md`.

Scaffold DSA study material:

```bash
npm run new-algorithm -- "Binary Search Lower Bound"
npm run new-data-structure -- "Union Find"
npm run new-theory -- "Sliding Window"
```

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
- Reuse helpers from `src/data-structures/` for shared structures when that
  improves clarity.
- Keep custom problem statements in `src/problems/custom/<slug>/prompt.md`; do not
  put custom interview prompts under `src/problems/leetcode/`.
- Keep algorithm study implementations under `src/algorithms/<slug>/` with a
  local README and tests. These implementations may define local example types
  or data representations when that makes the concept clearer.
- Keep data-structure study implementations under `src/data-structures/<slug>/`
  with a local README and tests.
- Keep problem solutions self-contained unless importing a shared helper clearly
  improves clarity.
- Keep theory and pattern notes under `docs/theory/` or `docs/patterns/`.

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

When adding a LeetCode problem, add it alphabetically to this index and the
README.md Solved Problems table in the same commit.

## Custom Problem Index

Custom interview problems are indexed in
[`src/problems/custom/README.md`](src/problems/custom/README.md). Add custom
problems with `npm run new-custom-problem -- "Problem Name"` or the
`$custom-problem` skill instead of editing the index manually.

## Shared Utilities

- [`buildTree`](src/data-structures/tree/array-to-tree/build-tree.ts) converts a
  level-order array containing numbers and `null` placeholders into a binary
  tree.
- [`treeToArray`](src/data-structures/tree/tree-to-array/tree-to-array.ts)
  converts a binary tree into a trimmed level-order array.

Add tests for utility changes because multiple problem solutions may depend on
their behavior.
