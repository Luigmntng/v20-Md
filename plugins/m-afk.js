let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    m.reply(`
╭─❑ 「 MODE AFK 」 ❑─
╠➥*NAME*: ${conn.getName(m.sender)}
╠
╠➥*INGFO*: ${text ? ': ' + text : ''}
╠
╰❑ `)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler

