let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`http://docs-jojo.herokuapp.com/api/katacinta`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result, m)
}
handler.help = ['katacinta']
handler.tags = ['quotes']
handler.command = /^katacinta$/i
handler.limit = true
module.exports = handler
