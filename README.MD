# cat-sketch-file

Output Sketch file JSON to stdout.

```
npx cat-sketch-file /path/to/file.sketch
```

Try piping to `jq` for formatting/querying.

```
npx cat-sketch-file /path/to/file.sketch | jq '.document.pages[0]'
```