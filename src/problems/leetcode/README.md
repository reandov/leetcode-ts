# LeetCode Problems

LeetCode solutions live here, one directory per problem:

```text
src/problems/leetcode/<problem-slug>/
|-- <problem-slug>.ts
`-- <problem-slug>.spec.ts
```

Create a scaffold with:

```bash
npm run new-leetcode -- "Problem Name"
```

When the scaffold comes from official LeetCode metadata, use the `$new-problem`
skill with the canonical problem URL.
