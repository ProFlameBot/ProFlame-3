module.exports = ({
    name: "voice mute",
    code: `$muteUser[$GuildID;$mentioned[1];yes]
    $onlyperms[ban;⚠ | You aren't allowed to use this command.]`
})