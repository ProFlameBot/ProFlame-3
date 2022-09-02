module.exports = ({
name: "warnings", 
code: `
$title[ ]
$description[
.
.
<@$mentioned[1]> got $getUserVar[warns;$mentioned[1]] warns]
$addTimeStamp
$color[RANDOM]
$thumbnail[$userAvatar[$findMember[$message]]]
$onlyperms[ban;⚠ | You aren't allowed to use this command.]
`
})