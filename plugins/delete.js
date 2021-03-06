let handler = function (m) {
  if (!m.quoted) throw 'Responda uma mensagem do bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Só posso deletar minhas mensagens'
  if (!isBaileys) throw 'A mensagem não foi enviada pelo bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
