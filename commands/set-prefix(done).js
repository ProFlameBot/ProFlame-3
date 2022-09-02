module.exports = ({
  name: "set prefix",
  code: `
  $reply
  $color[RANDOM]
  $description[ the prefix changed succesfully ]
  $setServerVar[prefix;$message]
   $onlyPerms[admin;You aren't allowed to use this command.]
  `
})