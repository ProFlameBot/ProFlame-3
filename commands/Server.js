
module.exports = ({
  name: "server",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;

{newEmbed:{title:$serverName[$guildID]}{description:ServerID🆔: $guildID
  Server Owner👑 : <@$ownerID>
  Create At📆 : <t:$truncate[$divide[$creationDate[$GuildId;ms];1000];1000]:R>
  ChannelCount💬 : $channelCount
  Role Count🔒 : $roleCount
  memberscount👥: $membersCount[$guildID]
  boostsCount✨ : $serverBoostCount[$guildID]
  
}{color:RANDOM}
{thumbnail:$serverIcon}
}
`

})