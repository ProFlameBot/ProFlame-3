module.exports = ({
  name: "bug",
  code: `
  $channelSendMessage[$channelID;
  $title[your report is now sended]
  $color[RANDOM]
  $thumbnail[$userAvatar[$findMember[$message]]]
  $description[your report is : $message]
  ]
  
  $channelSendMessage[1010502595804139581;{newEmbed:{title: $userTag[$Authorid] reported :$message}
  {color:RANDOM}
  }]

  `
}) 