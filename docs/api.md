---
sidebarDepth: 0
---

# API Reference

---

### `.getToken`

- _@params_: **email** -    `string`
- _@params_: **password** - `string`

```js
const { getToken } = require("xonia.js");
const bot = new getToken("email", "password");
```

---

### `.registerUser`

- _@params_: **username** - `string`
- _@params_: **email** -    `string`
- _@params_: **password** - `string`

---

### `.sendMessage`

- _@params_: **message** - `string`
- _@params_: **channel** - `string`
- _@params_: **token** -   `string`

```js
const { sendMessage } = require("xonia.js");
sendMessage("message", "channelID", "sessionToken");
```

---

### `.getMessage`

- _@params_: **channel** - `string`
- _@params_: **token** - `string`

---
