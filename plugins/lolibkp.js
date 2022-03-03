async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`, '', `Lu Vedo Yh vagnh?`, m)
    
    }
    
    handler.help = ['nsfwloli']
    
    handler.tags = ['nsfw']
    
    handler.premium = true
    
    handler.command = /^(nsfwloli)$/i
    
    handler.premium = true
    handler.register = true
    handler.nsfw = true
      
    module.exports = handler
