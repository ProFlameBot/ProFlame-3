module.exports = {
  name: "user",
  code: `
  $color[RANDOM]
$thumbnail[$userAvatar[$findMember[$message]]]
$description[joined server: <t:$truncate[$divide[$memberJoinedDate[$mentioned[1]];1000];1000]:R>

joined discord: <t:$truncate[$divide[$creationDate[$mentioned[1];ms];1000];1000]:R>
 ]
  `
}
//{newEmbed:{description:joined server: <t:$truncate[$divide[$memberJoinedDate[$mentioned[1]];1000];1000]:R>

//joined discord: <t:$truncate[$divide[$creationDate[$mentioned[1];ms];1000];1000]:R>}{color:RANDOM}}