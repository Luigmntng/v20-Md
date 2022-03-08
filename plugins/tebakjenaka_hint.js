let handler = async (m, { conn }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (!(id in conn.tebakjenaka)) throw false
    let json = conn.tebakjenaka[id][1]
    m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
}
handler.command = /^teja$/i
handler.limit = true
module.exports = handler
