const token = process.env.secrettoken;
const mainClass = require("./mainclass.js");
const bot = new mainClass(token);
bot.launch();
