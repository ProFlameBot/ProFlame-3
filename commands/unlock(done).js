module.exports = ({
  name: "unlock",
  code: `

$modifyChannelPerms[$guildId;$channelId;+sendmessage]
$title[unlock channel]
$color[RANDOM]
$description[
**✅ | channel unlocked**
]
$addTimestamp
$onlyperms[admin; you dont have permission to use this command]`
})