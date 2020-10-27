# RTLS Clients

## UDP Listener

### run the following to install the required dependencies:

```sh
cd udp_listen
npm install
```

### start and test the UDP listener.

```sh
npm run start
```

ctrl+C to close process

## .NET Websocket

Edit the following variables for your own instance setup in the cnet_socket/RTLSWebsocketClient.cs file

```sh
private const string uri = "studio.connectusglobal.com";
private static int port = 8080;
```

build c# .NET (using mono)

```sh
mcs -out:RTLSWebsocketClient.exe RTLSWebsocketClient.cs
```

Run the executable 

```sh
mono RTLSWebsocketClient.exe
```

ctrl+C to close process