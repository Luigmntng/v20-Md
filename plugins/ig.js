let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://www.instagram.com/reel/CaivjKDsNhe/?utm_medium=copy_link`
    let res = await fetch(global.API('hari', '/api/download/instadl', { url: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.medias.url, '', 'Jangan Lupa Follow Ig saya @ahmdlui', m)
}
handler.help = ['ig <link>']
handler.tags = ['downloader']
handler.command = /^ig$/i
handler.limit = 15
module.exports = handler
