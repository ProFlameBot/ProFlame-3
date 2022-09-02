module.exports = ({
  name: "lock",
  code: `

$modifyChannelPerms[$guildId;$channelId;-sendmessage]
$title[lock channel]
$color[RANDOM]
$description[
**✅ | channel locked**
]
$addTimestamp
$onlyperms[admin; you dont have permission to use this command]`
})