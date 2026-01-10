/*CMD
  command: /buyrf
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
  { title: "💳 Перейти к оплате", url: "https://www.donationalerts.com/r/oplata24/PkaufhcgMFKqdIXXHH" }]
    ,
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    ,
  [
  { title: "⬑ Назад", command: "/buysubk" }]
]
Bot.sendInlineKeyboard(buttons, "*💎 Оплата через СБП/Карта*\n\n💰 *Сумма*: 250 рублей\n⏰ *Срок*: 30 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
