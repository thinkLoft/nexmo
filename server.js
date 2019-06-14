const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "ab81f8f5",
  apiSecret: "RXF7vHtSg99XxKGg"
});

const from = "15815350850";
const to = "19176786382";
const text = "Hello from Nexmo";

nexmo.message.sendSms(from, to, text);
