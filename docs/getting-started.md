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

Grab the token and put this in the `index.js` file.

```js
const { sendMessage } = require("xonia.js");
sendMessage("message", "channelID", "sessionToken");
```

Okay, let's find the channelID now.

![](https://cdn.discordapp.com/attachments/826533808081862656/991692361904173086/unknown.png)

That's the channel ID, grab it then put in channelID.

```js
const { sendMessage } = require("xonia.js");
sendMessage("Hi, there!", "1535551883307913216", "afdswaeoihjtneshbermhrymkljmtdkljbnmfhkjrsih");
```

Let's make a weather webhook!

We will be using the [weather-js package](https://www.npmjs.com/package/weather-js).

```js
const weather = require('weather-js');
const { sendMessage } = require("xonia.js");

weather.find({search: 'London, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  const weatherData = JSON.stringify(result, null, 2);
  
  sendMessage(weatherData, "1535551883307913216", "afdswaeoihjtneshbermhrymkljmtdkljbnmfhkjrsih");
});
```

Hopefully, you had fun building this example!
We don't support live command interactions yet but we shall soon!
