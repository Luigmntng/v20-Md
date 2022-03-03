let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Japan',
jpegThumbnail: fs.readFileSync('./gambar1.jpeg')
  }
 }
}
let listOwner = new Array()
  for (let i of owner.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Work\nURL;Web gwejh: https://doujindesu.xxx\nEMAIL;Email Owner: Haisayang@hengker.com\nORG: WAJIB SAVE KHUSUS CWE\nTEL;Senang bisa membantumu;waid= ${i.split('@')[0]}:${i.split('@')[0]}\nEND:VCARD` })
  }
  let send = this.sendMessage(m.chat, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '#donasi', buttonText: {displayText: 'Minta Uangnya Om'}, type: 1},
  {buttonId: '#menu', buttonText: {displayText: 'BACK '}, type: 1},
  {buttonId: '#sc', buttonText: {displayText: 'SC 😱😱'}, type: 1},  
  
]
const buttonsMessage = {
    contentText: `
Hai Kak @${m.sender.replace(/@.+/, '')} 👋\nNih Kak Kontak Owner Saya Kalo Mau Jadi Pcrnya Chat Yh (>\\\<) 
`.trim(),    footerText: `${NOTE : khusus cewe}`,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { contextInfo: { mentionedJid: [m.sender]}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
