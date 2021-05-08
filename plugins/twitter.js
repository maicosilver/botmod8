let handler  = async (m, { conn }) => {
       conn.reply(m.chat,`oi, julia`, m)
}
handler.command = /^(oi)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
