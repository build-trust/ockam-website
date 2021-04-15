---
title: Forwarding
order: 6
---

#### Have questions? Let us help!

**We are here to help.** See the [Guides And Demos](https://github.com/ockam-network/ockam/discussions/1134) in
GitHub Discussions.

# Forwarding

This example shows how you can route messages through remote nodes. With message forwarding, only the forwarding
address is needed to send messages to a worker. A forwarding address is an alias to a route. By using a forwarding address,
messages don't need to contain the entire route to a worker.

## Using a Remote Mailbox

The `RemoteMailbox` API provides a convenient way to create a forwarding address on Ockam Hub. The inner type for RemoteMailbox
determines the type of messages the mailbox will relay.

We use the `remote_address` of the mailbox as the destination for messages.

```rust
let mailbox = RemoteMailbox::<String>::create(&mut ctx, hub, "echo_service").await?;
println!(
    "echo_service forwarding address: {}",
    mailbox.remote_address()
);
```

## Send a message to the Forwarded Echo Service

The `echo_client` that you built in the previous example can be used to send messages to the forwarding address of the
`echo_service` in the hub. The remote node address should be set to your hub address. After the hub entry in the route,
copy and paste the `echo_service` forwarding address.

# Putting it all Together - Forwarded Echo Service

```rust
use ockam::{async_worker, Context, RemoteMailbox, Result, Routed, Worker};
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
async fn main(mut ctx: Context) -> Result<()> {
    let hub = "Paste the address of the node you created on Ockam Hub here.";

    let tcp = TcpTransport::create(&ctx).await?;

    tcp.connect(hub).await?;

    ctx.start_worker("echo_service", EchoService).await?;

    let mailbox = RemoteMailbox::<String>::create(&mut ctx, hub, "echo_service").await?;

    println!(
        "echo_service forwarding address: {}",
        mailbox.remote_address()
    );

    Ok(())
}

```

Run the example:

```shell
cargo run --example echo_service
```

# Putting it all together - Echo Client

```rust
use ockam::{Context, Result, Route};
use ockam_transport_tcp::{TcpTransport, TCP};

#[ockam::node]
async fn main(mut ctx: Context) -> Result<()> {
    let hub = "Paste the address of the node you created on Ockam Hub here.";
    let echo_service =
        "Paste the forwarded address that the server received from registration here.";

    let tcp = TcpTransport::create(&ctx).await?;

    tcp.connect(hub).await?;

    ctx.send(
        Route::new().append_t(TCP, hub).append(echo_service),
        "Hello Ockam!".to_string(),
    )
    .await?;

    // Then wait for a message back!
    let msg = ctx.receive::<String>().await?;
    println!("Received echo: '{}'", msg);
    ctx.stop().await
}

```

Make sure the `echo_service` is running, successfully registered, and that you have copied the forwarding address and pasted
it into the `echo_client` source code.

Run the example:

```shell
cargo run --example echo_client
```
