module.exports = ({
  name: "suggest",
  aliases: ['sug'],
  code: `$title[ ]
$description[
suggestion
\`\`\`
$message
\`\`\`
<@$authorID> suggested 
$deleteCommand
$addTimeStamp
$color[RANDOM]
$thumbnail[$userAvatar[$findMember[$message]]]
$addReactions[❌;✔️]
 `
})