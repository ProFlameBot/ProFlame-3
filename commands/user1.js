module.exports = [{
name: "user",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;

{newEmbed:{description:
joined server: <t:$truncate[$divide[$memberJoinedDate[$findUser[$interactionData[options.data[0].value]]];1000];1000]:R>
joined discord: <t:$truncate[$divide[$creationDate[ $findUser[$interactionData[options.data[0].value]];ms];1000];1000]:R>}{color:RANDOM}
{thumbnail:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}
}
]`
}]  
