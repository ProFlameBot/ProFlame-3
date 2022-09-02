module.exports = ({
  name: "hide",
  code: `

$modifyChannelPerms[$guildId;$channelId;-viewchannel]
$title[Hide channel]
$color[RANDOM]
$description[
**✅ | channel hidden**
]
$addTimestamp
$onlyperms[admin; you dont have permission to use this command]
`
})