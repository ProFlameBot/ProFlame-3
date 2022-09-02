module.exports = ({
  name: "$alwaysExecute",
  $if: "v4",
  code: `
  $onlyIf[$getServerVar[links]==yes]
$onlyIfMessageContains[https]

You Can't Send Links
  `
})