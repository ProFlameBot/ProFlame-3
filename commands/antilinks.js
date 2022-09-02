module.exports = ({
  name: "linkprotection",
  $if: "v4",
code: `
$if[$message[1]==on]
$setServerVar[links;yes]
enabled **antilink**
$endif
$if[$message[1]==off]
$setServerVar[links;no]
Disabled **antilink**
$endif


`

})