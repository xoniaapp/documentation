---
sidebarDepth: 0
---
# Getting Started

Welcome! This page will give you an introduction to the **Xonia REST API**.

You'll learn how to connect to the API using our JS & Go Library.

This docs will contain everything you'll need to develop applications for Xonia.

### Let's create a Xonia Bot.

First, go to [https://app.xoniaapp.com](https://app.xoniaapp.com/) then sign up for a new account.

Make sure to use a complicated password.

### Install the required modules.
Install Xonia.js by  `npm i xonia.js` or for yarn `yarn add xonia.js`.

### Getting the auth_token for our Xonia Bot.

```js

const { getToken } = require("xonia.js");
const bot = new getToken("your email address", "your account password");

```

This should return a bunch of values and don't forget to keep that token a secret.