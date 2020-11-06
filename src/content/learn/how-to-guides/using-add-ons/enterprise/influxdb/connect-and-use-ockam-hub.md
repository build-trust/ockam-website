---
title: Connect and use Ockam Hub
order: 2
---

# Connect and use Ockam Hub

An Ockam Hub provides a variety of services that are typically needed for secure communication
within IoT. One of the services it provides is use of the Ockam Routing Protocol for Application
Layer Routing of end to end encrypted messages.

The Ockam Routing Protocol enables this service using a thin, binary wire format that encodes onward
and return routes for a message and carries end-to-end encrypted payloads over multiple hops of
transport layer connection.

This allows us to have application layer, asynchronous end-to-end secure channels without revealing
our business data on the wire as it passes through a variety of IoT gateways, load balancers and
network proxies. It also ensures that any network layer infrastructure or intermediary vendor cloud
services cannot become a weakness when we send commands to our remote devices. It protects out
critical time-series sensor data and device commands from eavesdropping, tampering, and forgery en-route.

This demo shows:
1. How Ockam InfluxDB Add-On can run as sidecar next to your InfluxDB.
2. How OckamD can run as an
[execd output plugin](https://github.com/influxdata/telegraf/blob/release-1.16/plugins/outputs/exec/README.md)
for Telegraf inside you connected devices
3. How these two components enable end-to-end encrypted messages between your connected devices and
your Influx TICK stack in a variety of complex IoT, edge and cloud network topologies.

### Step 1: **Clone the Ockam repo to get the demo scripts:**
```sh
git clone https://github.com/ockam-network/ockam.git
cd ockam && git checkout develop # TODO: update with tag
```

> Make sure you're running the following commands from within the `ockam` directory. All commands
below require that [Docker](https://docker.com) be installed on your machine. Using Ockam does _not_
require Docker, but it makes this demo easy to run and share!

---

### Step 2: **Run InfluxDB and ockamd**
```sh
./tools/docker/demo/influxdb.sh influxdb-ockam-sidecar-via-ockam-hub
```

This launches `InfluxDB` and `ockamd` in a container, waiting for input from the "initiator" end,
which you'll launch next. Think of that as your device, which creates the time-series data you
will store in `InfluxDB`.

Note the "Responder public key" and "Responder address on hub" values written to your terminal.
Make sure to copy & paste this string in place of `RESPONDER_PUBLIC_KEY` and
`RESPONDER_ADDRESS_ON_HUB` as the next command's argument.

The `COPIED_RESPONDER_PUBLIC_KEY` is used to cryptographically authenticate to the initiator, that
the responder is in fact the responder that it is configured to communicate with.

---

### Step 3: **Run Telegraf and ockamd**
```sh
./tools/docker/demo/influxdb.sh telegraf-ockamd-via-ockam-hub RESPONDER_PUBLIC_KEY RESPONDER_ADDRESS_ON_HUB
```

This launches `Telegraf` (a helpful data collection agent by InfluxData) and `ockamd` in a container
ready to capture time-series data. The "initiator" creates a
[**secure channel**](https://www.ockam.io/learn/concepts/secure_channels) with the "responder" and
all messages sent between them are fully encrypted, end-to-end.

_Learn more about `Telegraf` by InfluxData
[here](https://www.influxdata.com/time-series-platform/telegraf/)._

---

### Step 4: **Send Telegraf input via HTTP**
```sh
./tools/docker/demo/influxdb.sh telegraf-write
```

`Telegraf` is configured to launch `ockamd` as an
[execd output plugin](https://github.com/influxdata/telegraf/blob/release-1.16/plugins/outputs/exec/README.md),
which conveniently extends Telegraf to capture and process time-series data for InfluxDB. `ockamd`
creates the [**secure channel**](https://www.ockam.io/learn/concepts/secure_channels), manages the
[**transports**](https://www.ockam.io/learn/concepts/add-ons/transports/), and encrypts the input from
`Telegraf` and/or your device before it securely sends it to another `ockamd` (sitting next to
`InfluxDB`) where it is inserted into the database after being decrypted by `ockamd`.

_Read more about how Ockam simplifies encryption using our
[**Vault**](https://www.ockam.io/learn/concepts/vaults/) interface abstraction._

> Note, use a packet capture tool such as WireShark to inspect the network traffic and see that it's
fully encrypted as `ockamd` sends and receives your time-series data over the wire.

---

### Step 5: **Query data written to InfluxDB**
```sh
./tools/docker/demo/influxdb.sh influxdb-query
```

Now that there's data in `InfluxDB`, run a query using this command and see it show up via the
`influx` client. Feel free to write more data to `Telegraf` by repeating Step 4 above and re-run
the `influxdb-query` command to see it populated.

---

### Step 6: **6. Stop & clean-up the Docker containers**
```sh
./tools/docker/demo/influxdb.sh kill-all
```
---

Thanks for checking out Ockam's InlfluxDB Add-on! For more information, or to try using any of
Ockam's fully open-source components (including Rust, Elixir, and C libraries), head to the
[GitHub repo](https://github.com/ockam-network/ockam). Follow along by starring the repo, and send
us a PR!

_Learn more about `InfluxDB` and how to use `ockamd` with the robust time-series database on the
[InfluxData website](https://www.influxdata.com/), and our detailed
[partner page](https://www.influxdata.com/partners/ockam/)._
