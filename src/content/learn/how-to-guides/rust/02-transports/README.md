---
title: Transports
order: 4
---

#### Have questions? Let us help!

**We are here to help.** See the [Guides And Demos](https://github.com/ockam-network/ockam/discussions/1134) in
GitHub Discussions.

# Transports

Ockam uses pluggable libraries to support multiple networking protocols. These are called transports. In this example we
will use the Ockam TCP Transport, available as the [ockam_transport_tcp](https://crates.io/crates/ockam_transport_tcp) crate.

Add the Ockam TCP Transport dependency to your project:

```toml
ockam_transport_tcp = "0"
```

### Listen for messages over TCP

The `echo_service` only needs to call `listen` to listen on a local port, after we create the transport.

```rust
let tcp = TcpTransport::create(&ctx).await?;
tcp.listen("127.0.0.1:10222").await?;
```

# Putting it all together - Echo Service

```rust
use ockam::{async_worker, Context, Result, Routed, Worker};
use ockam_transport_tcp::TcpTransport;

struct EchoService;

#[async_worker]
impl Worker for EchoService {
    type Message = String;
    type Context = Context;

    async fn handle_message(&mut self, ctx: &mut Context, msg: Routed<String>) -> Result<()> {
        println!("echo_service: {}", msg);
        ctx.send(msg.return_route(), msg.body()).await
    }
}

#[ockam::node]
async fn main(ctx: Context) -> Result<()> {
    let tcp = TcpTransport::create(&ctx).await?;

    tcp.listen("127.0.0.1:10222").await?;

    ctx.start_worker("echo_service", EchoService).await
}

```

Run the example:

```shell
cargo run --example echo_service
```

## Echo Client

The `echo_client` does not need to implement a worker, it uses the APIs available on the node's context.

### Connect to a remote node

We will connect to a remote node using the [ockam_transport_tcp](https://crates.io/crates/ockam_transport_tcp) crate.

1. Create a TCP transport by calling `TcpTransport::create`.
2. Call `connect` on the returned transport using the remote node address.

```rust
let tcp = TcpTransport::create(&ctx).await?;
tcp.connect(remote_node).await?;
```

After connecting, we can send and receive messages just like a local worker.

### How messages are routed

Ockam Messages include their own hop-by-hop routing information. When a message is sent to a remote worker, the route it
is going to take must be specified.

A Route is an ordered list of addresses. Each address has an address type, and the address value. Address types specify
the kind of transport the Address is associated with.

For our `echo_client` and `echo_service` example, we need to construct a route that has the TCP remote node information:

```rust
Route::new().append_t(TCP, remote_node).append("echo_service"),
```

The route built above will be the path taken by the message.

**Hop 1**: The remote node over TCP.

**Hop 2**: The "echo_service" on the remote node.

# Putting it all together - Echo Client

```rust
use ockam::{Context, Result, Route, TcpTransport, TCP};

#[ockam::node]
async fn main(mut ctx: Context) -> Result<()> {
    let remote_node = "127.0.0.1:10222";

    let tcp = TcpTransport::create(&ctx).await?;
    tcp.connect(remote_node).await?;

    ctx.send(
        Route::new()
            .append_t(TCP, remote_node)
            .append("echo_service"),
        "Hello Ockam!".to_string(),
    )
    .await?;

    // Then wait for a message back!
    let msg = ctx.receive::<String>().await?;
    println!("Received echo: '{}'", msg);
    ctx.stop().await
}

```

Make sure the `echo_service` is started first.

Run the example:

```shell
cargo run --example echo_client
```

The Ockam Hub [creates a node for you instantly](/learn/how-to-guides/rust/03-hub). Let's move the `echo_service` to a node on the hub.
