let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai konten\n\nContoh: ${usedPrefix + command} https://www.instagram.com/reel/CaivjKDsNhe/?utm_medium=copy_link`
    let res = await fetch(global.API('hari', '/api/download/instadl', { url: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.medias.url) throw 'Error!'
    await conn.sendFile(m.chat, json.medias.url, '', ' Follow Ig saya Yh @ahmdlui', m)
}
handler.help = ['ig <link>']
handler.tags = ['downloader']
handler.command = /^ig$/i
handler.limit = 15
module.exports = handler
