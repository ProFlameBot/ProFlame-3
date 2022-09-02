module.exports = ({
  name: "avatar",
  aliases: ['av'],
  code: `
    
    $description[<@$findMember[$message]>'s avatar]
    $color[RANDOM]
    $image[$userAvatar[$mentioned[1]]]`
})
