var {WAMessageProto} = require('@adiwajshing/baileys')
let fs = require ('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `
» User Name : ${conn.getName(m.sender)}
» Alasan : ${text ? '' + text : 'No Text'}
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: fs.readFileSync('./src/img1.png') },           
          hydratedFooterText: wm,
          hydratedButtons: [{
            urlButton: {
              displayText: 'Official instagran',
              url: 'https://instagram.com/ahmdlui'
            }

          },
              {
            quickReplyButton: {
              displayText: 'Back To Menu',
              id: '.menu',
            }

          }]
        }
      }
    }), { userJid: m.sender, quoted: m });
   //conn.reply(m.chat, text.trim(), m)
   return await conn.relayMessage(
        m.chat,
        template.message,
        { messageId: template.key.id }
    )
}

handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
