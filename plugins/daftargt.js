let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '6.250'
let sn = '12.500'
let ss = '18.750'
let sp = '25.000'
let sv = '31.250'
//premium
let ph = '5.800'
let pn = '11.600'
let pp = '17.400'
let pv = '23.200'
let ppm = '29.000'
let info = `
╭━━━━「 *Harga Buy DL* 」
┊⫹⫺ *1 DL:* _${sh}Rp_
┊⫹⫺ *2 DL:* _${sn}Rp_
┊⫹⫺ *3 DL:* _${ss}Rp_
┊⫹⫺ *4 DL:* _${sp}Rp_                                                      
┊⫹⫺ *5 DL:* = _${sv}Rp_
╰═┅═━––––––๑

╭━━━━「 *Harga Jual DL* 」
┊⫹⫺ *1 DL:* _${ph}Rp_
┊⫹⫺ *2 DL:* _${pn}Rp_
┊⫹⫺ *3 DL:* _${pp}Rp_
┊⫹⫺ *4 DL:* _${pv}Rp_                                               
┊⫹⫺ *5 DL:* = _${ppm}Rp_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Ovo:* [${povo}]

–––––– *🐾 Kebijakan* ––––––

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} HARGA BUY DL ✦-------`,
	rows: [
	    {title: "🔖 1 DL", rowId: '.order *Paket:* 1 DL • Sewa', description: 'PRICE: ' + sh + 'Rp ' },
	    {title: "🔖 2 DL", rowId: '.order *Paket:* 2 DL • Sewa', description: 'PRICE: ' + sn + 'Rp ' },
	{title: "🔖 3 DL", rowId: '.order *Paket:* 3 DL • Sewa', description: 'PRICE: ' + ss + 'Rp ' },
	{title: "🔖 4 DL", rowId: '.order *Paket:* 4 DL • Sewa', description: 'PRICE: ' + sp + 'Rp ' },
	{title: "🔖 5 DL", rowId: '.order *Paket:* 5 DL • Sewa', description: 'PRICE: ' + sv + 'Rp ' },
	]
    }, {
    title: `${htjava} HARGA SELL DL ✦-------`,
	rows: [
	    {title: "🌟 1 DL", rowId: '.order *Paket:* 1 DL • Premium', description: 'PRICE: ' + ph + 'Rp ' },
	    {title: "🌟 2 DL", rowId: '.order *Paket:* 2 DL • Premium', description: 'PRICE: ' + pn + 'Rp ' },
	{title: "🌟 3 DL", rowId: '.order *Paket:* 3 DL • Premium', description: 'PRICE: ' + pp + 'Rp ' },
	{title: "🌟 4 DL", rowId: '.order *Paket:* 4 DL • Premium', description: 'PRICE: ' + pv + 'Rp ' },
	{title: "🌟 5 DL", rowId: '.order *Paket:* 5 DL • Premium', description: 'PRICE: ' + ppm + 'Rp ' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Daftar Harga!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['buydl', 'selldl']
handler.tags = ['info']
handler.command = /^(buy(dl)?|gt)$/i

export default handler
