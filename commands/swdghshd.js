module.exports = ({
name: "bot",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:{title:Bot Info}{description:bot in $numberSeparator[$serverCount] servers
created <t:$round[$divide[$creationDate[$clientID;ms];1000];1000]:R>}
{thumbnail:$userAvatar[$clientID]}
{color:RANDOM}
}
]
`
})