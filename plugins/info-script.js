import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ Ada Di GitHub
│ *NIH :* 
│ ╰ Tapi Gw Private
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Minta Sc Ke Owner Pasti Nnti Ga Di Kasih Soalnya Ownernya Pelit Yahaha!

let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/ohlxmarket",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CiCQ_SnuPdw/?igshid=YmMyMTA2M2Y=", 
    title: '𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
