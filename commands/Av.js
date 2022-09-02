module.exports = [{
name: "avatar",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;

{newEmbed:{description:
<@$findUser[$interactionData[options.data[0].value]]> avatar is}
{image:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}
}
]`
}]  
