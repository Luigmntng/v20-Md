let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    m.reply(`
_*⬣ ${conn.getName(m.sender)} sekarang AFK*_ 
_*⬣ Alasan ${text ? ': ' + text : ''}*_
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
