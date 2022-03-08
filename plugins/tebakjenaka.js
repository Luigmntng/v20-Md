/**
diupload oleh https://github.com/uhdahlah
**/


let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjenaka[id][0])
        throw false
    }
    let res = await fetch(global.API('lui', '/api/game/tebakjenaka', 'apikey'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
    let caption = ` 
*${json.pertanyaan}*
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teja untuk bantuan
Bonus: ${poin} XP
`.trim()`.trim()
    conn.tebakjenaka[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

module.exports = handler



https://restapi-production-a62b.up.railway.app/api/game/tebakjenaka?apikey=APIKEY