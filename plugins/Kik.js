const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mengambil stiker dari Website berdasarkan pencarian*\n\nContoh penggunaan:\n${usedPrefix + command} spongebob`
    let res = `https://restapi-production-a62b.up.railway.app/api/download/sticker?q=${text}&apikey=APIKEY`
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
*Total stiker:* ${json.result}
        `.trim())

    for (let i of json.result) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        await delay(1500)
    }
}
handler.help = ['kiyomasah <pencarian>']
handler.tags = ['sticker']
handler.command = /^(kiyomasah)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
