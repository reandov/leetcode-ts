# Data Structures

Reusable data structures and shared helpers live here. Each standalone data
structure should keep implementation, tests, and local notes together:

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
