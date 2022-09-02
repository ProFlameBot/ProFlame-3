const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const {LoadCommands, Bot } = require("aoi.js");
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
   token: process.env.TOKEN, 
   prefix: "$getServerVar[prefix]", 
   intents: "all" //Discord Intents 
 })
 bot.variables({
    prefix: ".",//prefix
    warns: "0",
    links: "no",
})

bot.status({
  text: ".help | mention me to know my prefix",
  type: "PLAYING",
  time: 12
})
bot.status({
  text: ".invite",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "$numberSeparator[$serverCount] servers",
  type: "STREAMING",
  time: 12
})
bot.onInteractionCreate()
bot.onMessage()
 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")