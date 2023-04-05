# Farwater Create S8 modpack

If you make changes to the server mods or the client modpack, make sure to check and modify both if neccesary.

Always make sure to run `packwiz refresh` when making changes. This updates the `index.toml`.

Some mods are not downloadable by packwiz, check any log output for instructions on how to resolve those issues.

## Requirements

- [Python 3](https://www.python.org/downloads/)

## Getting started

1. `pip install -r requirements.txt` Installs libs necessary for bootstrapping
2. `python3 export.py [server | client ]` export a server or client pack
