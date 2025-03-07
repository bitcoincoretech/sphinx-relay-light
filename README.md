# Relay

**Relay** is a Node.js wrapper around [LND](https://github.com/lightningnetwork/lnd), handling connectivity and storage for [**Sphinx**](https://sphinx.chat). 
Original Project [here](https://github.com/stakwork/sphinx-relay)

# Relay Light
**Relay Light** is an Electron UI wrapper around **Relay**. Its purpose is to allow users to connect to an **already existing** Lighting Network Node in order to use Sphinx Chat.


## Connect Relay to Lightning Network
Simply open the ![application](https://github.com/bitcoincoretech/sphinx-relay-light/releases) (MacOS Only for now) and provide the connection info for your Lighting Network Node, then click **(Re)connect**

![e1](https://user-images.githubusercontent.com/65119838/112992792-2ef3e580-9171-11eb-908b-3b27ff8f48bb.gif)

## Connect Sphinx Chat to Relay
Use the connection string provided by Sphinx Relay and create a new user
![e2](https://user-images.githubusercontent.com/65119838/112993056-737f8100-9171-11eb-8f99-761d32b4a878.gif)


## Join Tribes and Chat with Friends
![e3](https://user-images.githubusercontent.com/65119838/112995052-83986000-9173-11eb-89c5-25e7c8b87043.gif)


## Lightning Network Checklist
Make sure that your LN Node is correctly configured and up to date.
Both `synced_to_chain` and `synced_to_graph` must be set to `true`.
```
$ lncli getinfo
{
    ...
    "alias": "bitcoincore.tech",
    "num_active_channels": 1,
    "num_peers": 3,
    ...
    "synced_to_chain": true,
    "synced_to_graph": true,
    "testnet": false,
    "chains": [
        {
            "chain": "bitcoin",
            "network": "mainnet"
        }
    ],
```

Next check that your LN wallet is unlocked and that it has funds.
```
$ lncli walletbalance
{
    "total_balance": "19521952",
    "confirmed_balance": "19521952",
    "unconfirmed_balance": "0"
}

```


Check that you can reach the Sphinx LN Node. It is not mandatory to have a path to this node, but many other participants will likely have one.
```
$ lncli queryroutes --dest 023d70f2f76d283c6c4e58109ee3a2816eb9d8feb40b23d62469060a2b2867b77f --amt 10
{
    "routes": [
        {
            "total_time_lock": 677028,
            ....
        }
    ],
    "success_prob": 0.8346682227708259
}
```

### TLS Cert
Make sure the LND certificate allows you to connect from your host to the LND host.
The Relay does not explicitly report the error but `lncli` will pinpoint it correctly.

```
[lncli] rpc error: code = Unavailable desc = all SubConns are in TransientFailure, latest connection error: connection error: desc = "transport: authentication handshake failed: x509: certificate is valid for 127.0.0.1, ::1, 172.19.0.2, not 192.168.0.67"
```
