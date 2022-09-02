module.exports = [{
name: "invite",
code: `$title[1;Invite Me]  
$addButton[1;Invite me;link;https://discord.com/api/oauth2/authorize?client_id=999781844616761414&permissions=8&scope=applications.commands%20bot;no]
$color[RANDOM] 
$footer[1;Requested By $username#$discriminator]
$addTimestamp[1;] `
}]