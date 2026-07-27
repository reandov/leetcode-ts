# Data Structures

From-scratch data-structure study implementations and shared helpers live here.
The goal is to learn how each structure stores data and supports operations, not
to force problem solutions to reuse these files. Each standalone data structure
should keep implementation, tests, and local notes together:

```text
src/data-structures/<data-structure-slug>/
|-- <data-structure-slug>.ts
|-- <data-structure-slug>.spec.ts
`-- README.md
```

Create a new data-structure scaffold with:

```bash
npm run new-data-structure -- "Data Structure Name"
```

## Shared Helpers

- [buildTree](tree/array-to-tree/build-tree.ts)
- [treeToArray](tree/tree-to-array/tree-to-array.ts)
