---
title: Nodejs Http(s) Proxy
description: Master Node.js HTTP(S) proxying with https.Agent, https-proxy-agent, and Node.js 18's fetch API in this concise guide to secure and efficient network requests.
date: 2024-03-28
---

In a world where web applications are not isolated islands but interconnected ecosystems, the ability to efficiently manage HTTP and HTTPS requests is paramount. Node.js, with its non-blocking I/O model, has become a go-to environment for building scalable network applications. Yet, even with its robust standard libraries, Node.js does not provide out-of-the-box support for HTTP(S) proxying—a vital feature for navigating through the intricate networks of the modern web. This is where the concept of a proxy comes into play, serving as a gateway or intermediary between the client and the internet at large. In this article, we will explore the intricacies of HTTP(S) proxy implementation in Node.js, delving into the built-in `https.Agent` class, the third-party `https-proxy-agent` module, and the latest advancements introduced by **Node.js version 18**. Join me as we unravel the complexities of connection pooling, request queuing, and the subtle art of custom agent creation to enhance your Node.js networking capabilities.

## https.Agent

The [`https.Agent`](https://nodejs.org/api/https.html#class-httpsagent) class in Node.js is a fundamental part of the HTTPS module, which provides a mechanism to handle connection persistence and reuse, SSL/TLS negotiation, and socket management. The primary role of an agent is to manage connections to a web server to optimize network resource usage. When making multiple HTTPS requests to the same server, it can be beneficial to reuse the same connection, reducing the latency and overhead associated with setting up new secure connections.

Here's a breakdown of what `https.Agent` does:

- **Connection Pooling:** An agent maintains a pool of socket connections that are reused for HTTP requests to a server. This pooling conserves system resources, as the cost of establishing a TCP handshake and the SSL/TLS handshake is non-trivial.
- **Request Queuing:** If all sockets are in use, additional requests are queued by the agent until a socket becomes available.
- **Custom SSL/TLS Configuration:** The agent allows developers to specify custom SSL/TLS configuration options, such as certificates, ciphers, and SSL/TLS versions.
- **Custom Agent Implementation:** You can extend the `https.Agent` class to implement a custom agent. This would enable you to modify the behavior of socket creation, connection pooling, and even integrate additional features such as connection retries or response caching. To create a custom agent, you would subclass `https.Agent` and override methods such as [`createConnection`](https://nodejs.org/api/http.html#agentcreateconnectionoptions-callback) to handle the specifics of your connection logic. When making a request, you can then pass an instance of your custom agent to the [`agent`](https://nodejs.org/api/http.html#httprequesturl-options-callback) option in the request configuration.

Here's a simple example of how to subclass `https.Agent` to create a custom agent:

```js
import https from 'node:https'

class MyCustomAgent extends https.Agent {
  createConnection(options, callback) {
    // Custom connection logic here
    return super.createConnection(options, callback)
  }
}

const myAgent = new MyCustomAgent({
  // Custom agent options (if any)
})

const requestOptions = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
  agent: myAgent, // Using the custom agent
}

const req = https.request(requestOptions, (res) => {
  // Handle the response
})

req.end()
```

By using a custom agent, you can tailor the networking behavior of your HTTPS requests to suit the specific needs of your application, whether that's for performance optimization, security hardening, or any other requirements.

## https-proxy-agent for http(s) proxying

Since Node.js do not support HTTP(S) proxying natively, the [`https-proxy-agent`](https://github.com/TooTallNate/proxy-agents) is a third-party Node.js module that implements custom agent to support HTTPS proxying using HTTP CONNECT method. Here's how it works:

- **Connection Tunneling:** The agent intercepts the initial connection setup and, instead of connecting directly to the destination server, it connects to the proxy server. It then sends an [`HTTP CONNECT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT) request, which tells the proxy server to establish a tunnel between client the destination server.
- **Socket Handling:** Once the proxy server has set up the tunnel, the `https-proxy-agent` handles the underlying sockets. It encapsulates the SSL/TLS negotiation process through the tunnel, allowing secure data to pass through the proxy to the destination.
- **Custom Agent Creation:** Developers can create an instance of `https-proxy-agent` by passing in the proxy server's URL. This instance can then be used as the `agent` in the options for HTTP or HTTPS requests, enabling those requests to be proxied.

Here's a simplified example of using `https-proxy-agent`:

```js
import https from 'node:https'
import { HttpsProxyAgent } from 'https-proxy-agent'

const proxy = '<http://proxy-server.com:8080>' // Proxy server URL
const agent = new HttpsProxyAgent(proxy)

const requestOptions = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
  agent, // Using the proxy agent
}

const req = https.request(requestOptions, (res) => {
  // Handle the response
})

req.end()
```

In this case, `HttpsProxyAgent` handles the complexities of setting up a connection through the proxy, so the developer doesn't have to manually manage the CONNECT method and tunneling.

Additionally, the project `proxy-agents` (where `https-proxy-agent` belongs) provides other proxy agent packages for `http`, `ftp`, `pac`, `websocket`.

## Node.js Version 18 Fetch API and ProxyAgent

Node.js version 18 introduced a built-in [`fetch`](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch) function as part of the [`undici`](https://github.com/nodejs/undici) project. This native `fetch` implementation brings several benefits:

- **Standard Compliance:** It provides an API that is consistent with the `fetch` API available in modern web browsers, making it easier for developers to write isomorphic code (code that can run both on the client and server).
- **Performance:** `undici` is designed to be a faster and more efficient HTTP client compared to the built-in `http` and `https` modules.
- **Proxy Support with ProxyAgent:** `undici` provides its own [`ProxyAgent`](https://undici.nodejs.org/#/docs/api/ProxyAgent) class, which simplifies the process of configuring proxy support for HTTP requests. This agent handles the details of proxying requests in a way that is similar to `https-proxy-agent` but integrated within the `undici` library.

Here's how you might use `undici`'s `ProxyAgent`:

```js
import { fetch, ProxyAgent } from 'undici'

const proxyAgent = new ProxyAgent('<http://proxy-server.com:8080>')

fetch('<https://example.com>', { agent: proxyAgent })
  .then(res => res.text())
  .then((body) => {
    // Process response body
  })
```

## Node-fetch-native for Proxy Integration

The [`node-fetch-native`](https://github.com/unjs/node-fetch-native) package provides an abstraction layer that simplifies the usage of proxies in different Node.js environments. It automatically determines whether to use a custom HTTP Agent (for Node.js versions without native `fetch`) or `undici`'s `ProxyAgent` (for Node.js versions with native `fetch` support). This means developers don't need to worry about the underlying implementation details and can write cleaner, more maintainable code.

An example use of `node-fetch-native` might look like this:

```js
import { fetch } from 'node-fetch-native'
import { createProxy } from 'node-fetch-native/proxy'

// this proxy plain object includes both https.Agent and ProxyAgent
// implements for https proxy
const proxy = createProxy({ url: '<http://proxy-server.com:8080>' })

fetch('<https://example.com>', { ...proxy })
  .then(res => res.text())
  .then((body) => {
    // Process response body
  })
```

As we conclude our journey through the nuances of HTTP(S) proxying in Node.js, it's evident that the landscape is rich with tools and techniques designed to streamline and secure our web requests. From leveraging the persistent connection management of `https.Agent` to harnessing the power of `https-proxy-agent` for seamless proxy integration, developers are equipped with a variety of options to fine-tune network communication. With the advent of **Node.js version 18**, the introduction of the native fetch function and `ProxyAgent` has further simplified proxy support, aligning Node.js with the familiar browser-based fetch API and offering improved performance. The `node-fetch-native` package bridges the gap between different Node.js environments, making proxy integration a more intuitive and less error-prone endeavor. As we move forward, the continuous evolution of the Node.js ecosystem promises to bring even more refined and robust solutions for HTTP(S) proxying. Whether for performance optimization, security hardening, or specific application requirements, mastering the use of HTTP(S) proxies is an invaluable skill for any Node.js developer looking to build secure, efficient, and maintainable network applications.
