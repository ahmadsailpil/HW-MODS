let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 𝗢𝗛𝗟𝗫-𝗠𝗗 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 5k/grup (15 Hari)
    ┊⫹⫺ Normal: 10k/grup (1 bulan)
    ┊⫹⫺ Standar: 20k/grup (2 bulan)
    ┊⫹⫺ Pro: 35k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 50k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (15 hari)
    ┊⫹⫺ Normal: 10k (1 bulan)
    ┊⫹⫺ Pro: 30k (4 bulan)
    ┊⫹⫺ Vip: 40k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 60k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Dana
    • Gopay
    • Ovo
    • QRIS
    
    Nomor Owner :
    wa.me/6283160327945
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY WH MODS DEV`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
