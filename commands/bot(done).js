module.exports = ({
  name: "bot",
  code: `
$title[bot info] 
$color[RANDOM]
$thumbnail[$userAvatar[$clientID]]
$description[
bot in $numberSeparator[$serverCount] servers
created <t:$round[$divide[$creationDate[$clientID;ms];1000];1000]:R>
`
})
