module.exports = ({
    name: "voice unmute",
    code: `$muteUser[$guildID;$mentioned[1];no]
    $onlyperms[ban;⚠ | You aren't allowed to use this command.]`
})