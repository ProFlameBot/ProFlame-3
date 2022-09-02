module.exports = ({
  name: "<@$ClientID>",
  nonPrefixed: "True",
  code: `
  $reply
  my prefix is : \`$getServerVar[prefix]\`
  `
})