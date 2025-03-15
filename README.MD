# JSON-formatter

A lightweight json formatter CLI tool built using chalk, commander. yargs , jest(for testing purpose).

Options Include:

- Options:
      --version  Show version number                                   [boolean]
  -f, --file     Path to the JSON file                       [string] [required]
  -o, --output   Path to save the formatted JSON                        [string]
  -m, --minify   Minify the JSON instead of formatting[boolean] [default: false]
      --help     Show help                                             [boolean]


### Go ahead clone the repo

Install necessary dependencies:
```javaScript
    pnpm install
```
Run: 
```node
    pnpm run dev -f=[fileName].json
```

