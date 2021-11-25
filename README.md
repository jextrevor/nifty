# nifty

Javascript fun

Recreating all possible sequences of text in Javascript using only the characters `[`, `]` and `+`.

## Possible Characters

As of time of writing, the following characters are possible:
- `a`
- `c`
- `d`
- `e`
- `f`
- `I`
- `i`
- `N`
- `n`
- `o`
- `t`
- `u`
- `y`
- `(`
- `)`
- `{`
- ` `
- Numbers 0-9

If you choose to limit yourself to just Chrome or just Firefox, then the following become possible (the earlier characters are cross compatible):
- `\n` (Only for Firefox)
- `[`
- `]`
- `}`
- `v`

This is due to an inconsistency with the way that Chrome/NodeJS converts a native function to text and the way that Firefox does it.