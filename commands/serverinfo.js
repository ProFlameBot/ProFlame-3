module.exports = [{
  name: "server",
  code: `
  $title[1;Server INFO]
  $description[1;
  Servername: $serverName[$guildID]
  ServerID🆔: $guildID
  Server Owner👑 : <@$ownerID>
  Create At📆 : <t:$truncate[$divide[$creationDate[$GuildId;ms];1000];1000]:R>
  ChannelCount💬 : $channelCount
  Role Count🔒 : $roleCount
  memberscount👥: $membersCount[$guildID]
  boostsCount✨ : $serverBoostCount[$guildID]
  
  ]
  $color[RANDOM]
  $thumbnail[$serverIcon]
  `
}]