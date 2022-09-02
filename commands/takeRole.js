module.exports = [{
  name: "take role",
  code: `
$description[Successuflly taken the role: <@&$get[role]> from: $usertag[$get[usr]]
$color[RANDOM]
$reply
$takeRoles[$guildId;$get[usr];$get[role]]

$onlyIf[$memberExists[$get[usr]]==true;You must specify a member that is in this server]
$onlyIf[$mentionedRoles[1]!=;You must specify the role to taken]
$onlyIf[$get[usr]!=;You must specify a member to take the role from]

$let[usr;$findMember[$message[1]]]
$let[role;$mentionedRoles[1]]

 $onlyPerms[admin;You aren't allowed to use this command.]
`
}]