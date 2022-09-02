module.exports = ({
name: "warn", 
code: `
$senddm[ {newEmbed:{description:<@$mentioned[1]> you are Warned ⚠️ !
Reason : $message[3]}
{color:RANDOM}};$mentioned[1]]

$title[$username[$mentioned[1]] is now Warned ⚠️!]
$description[
Reason : $Message[3]
]
$setUservar[warns;$sum[$getuservar[warns;$mentioned[1]];1];$mentioned[1]]


$color[3498DB]
$footer[$username[$mentioned[1]]]
$addTimestamp


 $onlyPerms[admin;You aren't allowed to use this command.]
 

  `
}) 
  
 