---
name: new-algorithm
description: Scaffold reusable algorithm implementations in this DSA TypeScript repository. Use when the user asks to add a general algorithm, random algorithm, reusable algorithm template, or algorithm study entry under src/algorithms rather than solving a specific LeetCode/custom problem.
---

# New Algorithm

Create reusable algorithm material under `src/algorithms/`.

## Workflow

1. Inspect `git status --short` and preserve unrelated work.
2. Choose a concise algorithm title and kebab-case slug.
3. Run:

   ```bash
   npm run new-algorithm -- "<Algorithm Name>"
   ```

4. Keep the generated shape:

   ```text
   src/algorithms/<slug>/
   |-- <slug>.ts
   |-- <slug>.spec.ts
   `-- README.md
   ```

5. If the user supplied requirements, refine the README and exported function
   signature while keeping `throw new Error("Not implemented");` unless the user
   explicitly asked for implementation.
6. Add focused tests only when expected behavior is defined.
7. Run `npm run check` and the new spec directly when tests are executable.

## Guardrails

- Do not put reusable algorithms under `src/problems/`.
- Do not overwrite an existing algorithm directory.
- Do not implement the algorithm unless the user explicitly asks for the
  implementation.
