# Relay

**Relay** is a Node.js wrapper around [LND](https://github.com/lightningnetwork/lnd), handling connectivity and storage for [**Sphinx**](https://sphinx.chat). 
Original Project [here](https://github.com/stakwork/sphinx-relay)

# Relay Light
**Relay Light** is an Electron UI wrapper around **Relay**. Its purpose is to allow users to connect to an **already existing** Lighting Network Node in order to use Sphinx Chat.

## Config
Simply open the application and provide the connection info for your Lighting Network Node, then click **(Re)connect**

![image](https://user-images.githubusercontent.com/65119838/112980713-dd445e80-9162-11eb-8a48-6ea1aec9db02.png)


### Before You Begin
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
