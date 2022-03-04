const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    let str(`
         Mode Afk
Name : ${conn.getName(m.sender)} 
Alasan : ${text ? ': ' + text : ''}
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: jpegThumbnail: await (await fetch(`https://telegra.ph/file/9e7c12f1c453608c2cf3a.jpg`)).buffer() },         
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
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
