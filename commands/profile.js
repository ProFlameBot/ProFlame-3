module.exports = ({
  name: "profile",
  code: `
  $botTyping
  $title[]
  $image[https://api.probot.io/profile/$mentioned[1]]
  
$suppressErrors

  `
})