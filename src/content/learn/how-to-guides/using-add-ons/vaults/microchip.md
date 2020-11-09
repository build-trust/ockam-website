---
title: Microchip
order: 1
---

# Using the Microchip Ockam Add-on (with ATECC608A)

## Hardware cryptography to the rescue!

Securing network communication is hard, let alone if one of the participants is IoT device with very
restricted resources. In such cases on of the best solutions may be including dedicated secure
element into your device. One of such devices is Microchip's ATECC608A Secure Element, which is
supported by Ockam.

Let's go through the demo and observe secure communication between Raspberry Pi with connected ATECC608A
and your PC.

### Prerequisites:
To run this demo you need some special hardware:
* Raspberry Pi with installed OS
* Development board with ATECC608A (e.g. CryptoAuth Xplained Pro)
* 4 jumper cables

### Step 1: **Connect ATECC608A board with Raspberry Pi using I2C**
Connect 3.3V, Ground, SDA and SCL of your Raspberry Pi to corresponding pins on the board.
Run following command from your Raspberry Pi console to check the connection:
```sh
sudo i2cdetect -y 1
```
If everything is OK, you'll see connected device at 0x60 address.

### Step 2: **Install Microchip's tools**
```sh
sudo apt-get install libusb-1.0-0-dev libhidapi-dev
pip install cryptoauthlib==20190517 --no-cache-dir
```

### Step 3: **Clone the Ockam repo**
Run this commands on both Raspberry Pi and your PC
```sh
git clone --single-branch --branch sanjo/ockamd_p256 https://github.com/ockam-network/ockam.git
cd ockam # TODO: update with tag
```

> Make sure you're running the following commands from within the `ockam` directory. All commands
below require that [Docker](https://docker.com) be installed on your machine. Using Ockam does _not_
require Docker, but it makes this demo easy to run and share!

---

### Step 4: **Configure ATECC608A**
Beware that the following step will lock your chip's configuration and you won't be able to change it!
Run following script:
```sh
python ./tools/microchip/atecc608a.py -i i2c --i2c 0xC0
```

### Step 5: **Run InfluxDB and ockamd on your PC**
```sh
./tools/docker/demo/influxdb.sh influxdb-ockamd
# TODO: -s atecc argument should be added to ockamd command to use corresponding cipher suite
```

This launches `InfluxDB` and `ockamd` in a container, waiting for input from the "initiator" end,
which you'll launch next. Think of that as your application, which creates the time-series data you
will store in `InfluxDB`. Note the "Responder public key" line written to your terminal. Make sure
to copy & paste this string into the `$COPIED_RESPONDER_PUBLIC_KEY` as the next command's argument.
This is a basic way to verify that the initiator and responder are who they claim to be.

---

### Step 6: **Run ockamd**
```sh
# TODO: This should be more user-friendly somehow
cd implementations/rust/daemon
cargo build --features=atecc608a
ockamd --role initiator --route udp://$PC_IP:$PC_PORT --local-socket $RASP_IP:$RASP_PORT --service-public-key $COPIED_RESPONDER_PUBLIC_KEY --service-address 01242020 -s atecc -v ATECC
```

This launches `ockamd` ready to capture time-series data from stdin. The "initiator" creates a
[**secure channel**](/learn/concepts/secure_channels) with the "responder" and
all messages sent between them are fully encrypted, end-to-end. Note that you aren't signing or
managing certificates, or having to set up TLS anywhere in this architecture!

!["ATECC demo"](./assets/ATECC-working.png)

---

Thanks for checking out Ockam's Microchip Add-on! For more information, or to try using any of
Ockam's fully open-source components (including Rust, Elixir, and C libraries), head to the
[GitHub repo](https://github.com/ockam-network/ockam). Follow along by starring the repo, and send
us a PR!

---

> Didn't find what you're looking for?
>
> Contact us directly through the Contact menu item in the header of this page,
>
> or start a discussion on [GitHub](https://github.com/ockam-network/ockam/discussions).
