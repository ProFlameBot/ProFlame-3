module.exports = [{
name: "id",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:{title:ID}{description: <@$findUser[$interactionData[options.data[0].value]]>'s id is  \`$findUser[$interactionData[options.data[0].value]]\`}{color:RANDOM}{color:RANDOM}}


]`
}]  
