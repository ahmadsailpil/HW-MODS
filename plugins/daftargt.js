let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '6.200'
let sn = '12.400'
let ss = '18.600'
let sp = '24.800'
let sv = '31.000'
//premium
let ph = '5.800'
let pn = '11.600'
let pp = '17.400'
let pv = '23.200'
let ppm = '29.000'
let info = `
╭━━━━「 *HARGA BUY DL* 」
┊⫹⫺ *1 DL:* _${sh}Rp_
┊⫹⫺ *2 DL:* _${sn}Rp_
┊⫹⫺ *3 DL:* _${ss}Rp_
┊⫹⫺ *4 DL:* _${sp}Rp_                                                  
┊⫹⫺ *5 DL:* = _${sv}Rp_
╰═┅═━––––––๑

╭━━━━「 *HARGA SELL DL* 」
┊⫹⫺ *1 DL:* _${ph}Rp_
┊⫹⫺ *2 DL:* _${pn}Rp_
┊⫹⫺ *3 DL:* _${pp}Rp_
┊⫹⫺ *4 DL:* _${pv}Rp_                                               
┊⫹⫺ *5 DL:* = _${ppm}Rp_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Dana:*
• *Gopay:*
• *Ovo:*

–––––– *🐾 Kebijakan* ––––––
🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} DAFTAT BUY DL ✦-------`,
	rows: [
	    {title: "🔖 1 DL", rowId: '.order *Paket:* 1 DL • BUY DL', description: 'PRICE: ' + sh + 'Rp' },
	    {title: "🔖 2 DL", rowId: '.order *Paket:* 2 DL • BUY DL', description: 'PRICE: ' + sn + 'Rp' },
	{title: "🔖 3 DL", rowId: '.order *Paket:* 3 DL • BUY DL', description: 'PRICE: ' + ss + 'Rp' },
	{title: "🔖 4 DL", rowId: '.order *Paket:* 4 DL • BUY DL', description: 'PRICE: ' + sp + 'Rp' },
	{title: "🔖 5 DL", rowId: '.order *Paket:* 5 DL • BUY DL', description: 'PRICE: ' + sv + 'Rp' },
	]
    }, {
    title: `${htjava} DAFTAR SELL DL ✦-------`,
	rows: [
	    {title: "🌟 1 DL", rowId: '.order *Paket:* 1 DL • SELL DL', description: 'PRICE: ' + ph + 'Rp' },
	    {title: "🌟 2 DL", rowId: '.order *Paket:* 2 DL • SELL DL', description: 'PRICE: ' + pn + 'Rp' },
	{title: "🌟 3 DL", rowId: '.order *Paket:* 3 DL • SELL DL', description: 'PRICE: ' + pp + 'Rp' },
	{title: "🌟 4 DL", rowId: '.order *Paket:* 4 DL • SELL DL', description: 'PRICE: ' + pv + 'Rp' },
	{title: "🌟 5 DL", rowId: '.order *Paket:* 5 DL • SELL DL', description: 'PRICE: ' + ppm + 'Rp' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(buydl|selldl|gt)$/i

export default handler
