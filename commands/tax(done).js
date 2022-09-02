module.exports = {
  name:"tax",
  aliases:["t"],
  code:`
$title[tax]
$description[your tax is $round[$math[$message[1] * (20) / (19) + (1)]]]
`
}
