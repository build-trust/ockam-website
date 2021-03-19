---
title: Node networking with Ockam Hub
order: 3
---

# Worker networking with Ockam Hub

This example introduces the concepts of node transports, and sending messages to remote workers.

## Getting started

Create a new Rust binary with cargo:

```shell
cargo new tcp_worker
```

Add the `ockam`, `ockam_node`, and `ockam_transport_tcp` dependencies to your project:

```toml
ockam = "0"
ockam_node = "0"
ockam_transport_tcp = "0"
```

Initialize your node as shown in the [Nodes and Workers]() example.

```rust
#[ockam::node]
async fn main(ctx: Context) -> Result<()> {
    ctx.stop().await
}
```

## Ockam Transports

Ockam uses pluggable transport libraries to interface with different networking channels.  The `ockam_tcp_transport`
crate exposes a TCP transport router, and connection worker concept.  With it you can connect to any other TCP transport
implementation.

First, import the required items from the TCP transport crate:

```rust
use ockam_transport_tcp::{self as tcp, TcpRouter};
use std::net::SocketAddr;
```

## Creating a TCP transport

Then, create and register the TCP domain router with your local node:

```rust
let router_handle = TcpRouter::register(&ctx).await?;
```

The TCP router ensures that messages sent to TCP-type addresses are handled by the correct connection workers.

Next up, start a connection worker pair that establishes a connection to a remote node.  In this example, we use the IP
address and port of a test node running at `hub.ockam.network`.

```rust
let addr: SocketAddr = "138.91.152.195:4000".parse().unwrap();
let connection = tcp::start_tcp_worker(&ctx, addr).await?;
```

Register the connection with the TCP router that is already running, via the `router_handle` interface.

```rust
router_handle.register(&connection).await?;
```

## Constructing message routes

Sending messages to remote workers is slightly more complicated than sending messages to local workers, because the
message needs to know the full route to the remote worker in question.  The `Route` interface can be used to create
fully specified routes to workers.

```rust
// ... more imports
use ockam::Route;
```

Addresses in routes have a type, indicated by an integer.  By convention type `0` messages are local, and type `1`
messages use the TCP transport.

Ockam Hub runs a worker that simply echoes any message called `echo_service`.  The following code constructs a route to
this worker, using the TCP transport to reach the Hub.

```rust
let route = Route::new()
    .append_t(1, "138.91.152.195:4000")
    .append("echo_service");
```

## Sending and receiving messages

Sending a message, and receiving its reply now works the same as with any local worker.

```rust
ctx.send_message(route, "Hello you over there!".to_string()).await?;

let reply = ctx.receive::<String>().await?;
println!("Echo says: {}", reply);
```

## Running the example

From the `ockam_examples` crate, run:

```shell
cargo run --example guide_02_tcp_remote
```
