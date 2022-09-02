module.exports = ({
  name: "show",
  code: `

$modifyChannelPerms[$guildId;$channelId;+viewchannel]
$title[show channel]
$color[RANDOM]
$description[
**✅ | channel showen**
]
$addTimestamp
$onlyperms[admin; you dont have permission to use this command]
`
})