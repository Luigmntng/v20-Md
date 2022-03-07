let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lui', '/api/download/shopee', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Barang:* ${v.name}\n*Harga:* ${v.harga}\n*Terjual:* ${v.terjual}\n*Lokasi:* ${v.location}\n*Cover:* {v.cover}\n*Deskripsi:* ${v.desc}\n*Stok:* ${v.stock}\n *Informasi:* ${v.information}\n*Link:* ${v.link}\n*Review:* ${v.img_detail}}\n==--------------------------==\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['shopee <nama barang>']
handler.tags = ['internet']
handler.command = /^(shopee)$/i

handler.limit = true

module.exports = handler
