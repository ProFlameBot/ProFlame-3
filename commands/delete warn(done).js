module.exports = ({
  name: "delete warns",
  code: `
  $color[RANDOM]
 $title[successfully deleted $message[3] warns]
 $description[now <@$mentioned[1]> have $getuservar[warns] warns]
$setUservar[warns;$sub[$getuservar[warns;$mentioned[1]];$message[3]];$mentioned[1]]
$onlyPerms[admin;You aren't allowed to use this command.]
`
})