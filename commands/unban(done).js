module.exports = ({
  name: "unban",
  $if: "v4",
  code: `$if[$checkCondition[($userExists[$findUser[$message[1];no]]==true)&&($isBanned[$guildID;$findUser[$message[1];no]]==true)]==true]
✅ | **<@$findUser[$message[1];no]> is now unbanned. **
$unban[$guildID;$findUser[$message[1];no]]

$elseif[$checkCondition[($userExists[$findUser[$message[1];no]]==true)&&($isBanned[$guildID;$findUser[$message[1];no]]==false)]==true]
❌ | **This User is not banned.**
$endelseIf

$elseIf[$userExists[$findUser[$message[1];no]]==false]
❌ | **This user doesn't exist.**
$endelseIf
$endif
$onlyperms[ban;⚠️ | You aren't allowed to use this command.]
$suppressErrors[\`Error\`: Could not be completed.]`
})