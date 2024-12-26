# Nx 20 React Dynamic Module Federation

This project demonstrates using dynamic remotes with module federation and React in a Nx 20 workspace.

It contains a `host` application named "shell" and 3 `remote` applications.

The `host` application fetches a `config.json` at runtime that contains the list of remotes to load.

Then it uses `registerRemotes` from `@module-federation/enhanced/runtime` to register the remotes.

## Run the applications

To run the applications, you need to start the `host` application and the `remote` applications.

```bash
npx nx run-many -t serve --parallel=4
```
