module.exports = ({

  name: "ban",
  code: `
 ✅|$message **is now banned from the server.**
  
  $ban[$guildID;$mentioned[1];0;$noMentionMessage]

  $onlyperms[ban;⚠ | You aren't allowed to use this command.]
  $suppressErrors[\`Error\`: Could not be completed.]
  
  `

});
//(done)