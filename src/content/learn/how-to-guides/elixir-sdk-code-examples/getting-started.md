---
title: Start Here
order: 1
---

# Get Started with the Ockam Elixir SDK

This guide walks you through the steps necessary to use the Ockam Elixir SDK.

## Development Environment

Install elixir using your preferred method, such as a package manager. Ockam supports Elixir v1.x (?).

Create a new project using `mix`:

```shell
mix new echo --module Echo
```

## Adding The Ockam Dependencies

### Ockam SDK Structure

TODO: Describe the structure of the Elixir SDK

### Adding Ockam to an Elixir Project

Edit your project `mix.exs` file, and add the ockam dependencies:

```
# Run "mix help deps" to learn about dependencies.
defp deps do
  [
      {:ockam, "~> 0.0.0"}
  ]
end
```
