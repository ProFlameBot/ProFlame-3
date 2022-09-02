module.exports = ({
name: "setprefix",
type: "interaction",
prototype: "slash",
code: `
$interactionReply[;
{newEmbed:
{title:Done!}
{description:prefix changed successfully
new prefix : \`$GetServerVar[prefix]\`
}
{color:RANDOM}}
$SetServerVar[prefix;$slashOption[newprefix]]

$onlyPerms[admin;{
    "content": "missing admin permission!",
    "ephemeral": "true",
"options":{"interaction":true}
  }]
  
]

`

})