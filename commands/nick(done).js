module.exports = ({
  name: "Set nick",
  aliases: ['nick','Setnick'],
  code: ` 
$onlyIf[$mentioned[1]!=;**mentione Who you want to change his name to**]
$onlyIf[$Message[3]!=;**Write down the name so the name changes :writing_hand:**]
$changeNickname[$mentioned[1];$message[3]]
$title[**done :white_check_mark:**]
$description[
**nick name changed : <@$mentioned[1]>

by : <@$authorID>

**]
$thumbnail[$userAvatar[$findMember[$mentioned[1]]]]
$suppressErrors[**somthing went wrong**]
$color[08ff00]
$addTimestamp
$onlyPerms[admin;You aren't allowed to use this command.]`
  

})