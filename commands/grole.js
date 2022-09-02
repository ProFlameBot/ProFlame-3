module.exports = [{
  name: "give role",
  code: `
$description[Successuflly gived the role: <@&$get[role]> to: $usertag[$get[usr]]
$color[RANDOM]
$reply
$giveRoles[$guildId;$get[usr];$get[role]]

$onlyIf[$memberExists[$get[usr]]==true;You must specify a member that is in this server]
$onlyIf[$mentionedRoles[1]!=;You must specify the role to give]
$onlyIf[$get[usr]!=;You must specify a member to give the role]

$let[usr;$findMember[$message[1]]]
$let[role;$mentionedRoles[1]]

$onlyPerms[admin;You aren't allowed to use this command.]
`
}]