# Algorithms

From-scratch algorithm study implementations live here. The goal is to learn
how each algorithm works, not to build a shared library for problem solutions.
Each algorithm should keep its implementation, tests, and local notes together:

```text
src/algorithms/<algorithm-slug>/
|-- <algorithm-slug>.ts
|-- <algorithm-slug>.spec.ts
`-- README.md
```

Create a new algorithm scaffold with:

```bash
npm run new-algorithm -- "Algorithm Name"
```

Algorithms may define local example types or representations when that makes the
concept easier to study. Problem solutions under `src/problems/` should stay
self-contained unless importing a shared helper clearly improves clarity.
