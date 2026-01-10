/*CMD
  command: /rubton
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "💳 Перейти к оплате", url: "http://t.me/send?start=IVTDzuan9MpX" }]
    ,
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    ,
  [
  { title: "⬑ Назад", command: "/buysubk" }]
]
Bot.sendInlineKeyboard(buttons, "*💎 Оплата через CryptoBot*\n\n💰 *Сумма*: 3 USDT\n⏰ *Срок*: 30 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
